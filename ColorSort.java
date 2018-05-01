//Daniel Vogel Tucker Johnson Joseph San Miguel 2018
//Heapsort() and related methods are based on code from "adohe", heapsort.java, https://gist.github.com/adohe/9339748

import java.awt.Color;
import java.util.*;

/**
 * The main driver of the program. It creates a SortingImage object with FileChooser, then runs SortingImage.dialogue().
 */
public class ColorSort{

  public static void main(String[] args){
    System.out.println("Please input an image.");
    SortingImage unsorted = new SortingImage(FileChooser.pickAFile());
    unsorted.dialogue();
  }
}

/**
 * SortingImage adds sorting functionality (and some utility methods) to the book class Picture.
 */
class SortingImage extends Picture{
  Pixel[] imagePixels;
  int iterator;

  /**
   * CONSTRUCTOR
   */
  public SortingImage(String file){
    super(file);
    this.show();
    imagePixels = this.copy().getPixels();
  }

  /**
   * Creates a scanner object that allows the user to select which
   * sorting method they'd like to use via the command line. It also
   * allows the user to randomize the image first, which replaces the
   * pixels in the input image with a somewhat random selection.
   */
  void dialogue(){
    Scanner sc = new Scanner(System.in);
    System.out.println("I want to: \n 0:sort the existing image \n 1:R A N D O M I Z E");
    if(sc.nextInt() == 1){
      randomizeImage();
      this.repaint();
    }
    System.out.println("Pick a sorting method:");
    System.out.println(" 0:bubbleSort; \n 1:insertionSort; \n 2:heapSort; \n 3:quickSort; \n 4:radixSort;");
    pickSort(sc.nextInt());
  }

  /**
   * Calls the different sorting methods available to the user. The backend to the very basic dialogue() "G"UI.
   */
  void pickSort(int type){
    iterator = 0;
    long start = System.currentTimeMillis();

    switch(type){
      case 0: bubbleSort();
      break;
      case 1: insertionSort();
      break;
      case 2: heapSort();
      break;
      case 3: quickSort(0, imagePixels.length-1);
      break;
      case 4: radixSort();
      break;
    }
    float totaltime = (System.currentTimeMillis() - start) / 1000F;
    System.out.println("done:" + totaltime + "seconds");
    System.out.println("pixels per second: " + (int)(((float)iterator/totaltime)));
  }


  /*
   * SORTING METHOD: insertion sort
   */
  public void insertionSort(){//sort method using insertion sorting
    Pixel pKey;
    int n = imagePixels.length;
    for(int i = 1; i <n - 1; i++){
      pKey = imagePixels[i];
      int j = i - 1;
      while(j >= 0 && getHue(imagePixels[j]) > getHue(pKey)){
        imagePixels[j+1] = imagePixels[j];
        j = j-1;
      }
      imagePixels[j+1] = pKey;
      redraw_self(i);
    }
  }

  /*
   * Heapsort organizes the pixels in the input image into a binary tree, then recursively sorts these relations until
   * the whole image is sorted. The more the input image has an identifiable shape, the more the user will be able
   * to visualize the recursion.
   */
  void heapSort(){
    iterator = 0;
    buildMaxHeap();
    int length = imagePixels.length;
    for(int i = length-1; i>0; i--){
      Pixel temp = imagePixels[0];
      imagePixels[0] = imagePixels[i];
      imagePixels[i] = temp;
      maxHeapify(imagePixels,1,i);
      redraw_self(imagePixels.length);
    }
  }

  /*
   * The recursive driver for heapSort().
   */
  private void buildMaxHeap(){
    int heapSize = imagePixels.length;

    for(int i = heapSize/2; i > 0; i--){
      maxHeapify(imagePixels, i, heapSize);
    }
  }

  /*
   * A utility function for heapSort().
   */
  private void maxHeapify(Pixel[] array, int index, int heapSize){
    int l = index * 2;
    int r = l + 1;
    int largest;

    if(l <= heapSize && getHue(array[l - 1])> getHue(array[index-1])){
      largest = l;
    } else {
      largest = index;
    }

    if(r <= heapSize && getHue(array[r-1]) > getHue(array[largest-1])){
      largest = r;
    }

    if(largest != index){
      Pixel temp = array[index-1];
      array[index-1] = array[largest-1];
      array[largest-1] = temp;
      maxHeapify(array,largest,heapSize);
    }
  }

  /**
   * SORTING METHOD: bubblesort
   */
  void bubbleSort(){
    iterator = 0;
    int place = 0;
    int max_place = 0;
    Pixel a;
    while(max_place < imagePixels.length - 1){
      if (getHue(imagePixels[max_place]) > getHue(imagePixels[max_place + 1])){
        place = max_place;
        a = imagePixels[place];
        imagePixels[place] = imagePixels[place + 1];
        imagePixels[place + 1] = a;
        while(place >= 0){
          if (getHue(imagePixels[place]) > getHue(imagePixels[place + 1])){
            a = imagePixels[place];
            imagePixels[place] = imagePixels[place + 1];
            imagePixels[place + 1] = a;
          }
          place -= 1;
        }
        redraw_self(max_place);
        place = 0;
      }else{
        max_place += 1;
      }
    }
    redraw_self(max_place);
  }

  public void radixCount(Pixel[] pArr, int n, int exp){
    Pixel[] output = new Pixel[n];
    for(int k = 0; k < output.length;k++){output[k] = pArr[0];}
    int i;
    int[] count = new int[10];
    Arrays.fill(count,0);
    for(i =0; i < n; i++){
      count[((getRadixHue(pArr[i])/exp)%10)]++;
    }

    for(i = 1; i < 10; i++){
      count[i] += count[i-1];
    }


    for(i = n-1; i >= 0; i--){
      output[count[(getRadixHue(pArr[i])/exp)%10] - 1] = pArr[i];
      count[(getRadixHue(pArr[i])/exp)%10]--;
    }
    imagePixels = output;
    redrawOnce();


  }

  public void radixSort(){
    iterator = 0;
    int n = imagePixels.length;
    int m = radixMax(imagePixels);

    for(int exp = 1; m/exp>0; exp*=10){
      radixCount(imagePixels,n,exp);
    }
    System.out.println("Radix Complete");
  }

  /**
   * SORTING METHOD: quickSort
   * Recursive method, when initially calling should use input
   * low = 0, high = imagePixels.length - 1
   */
  void quickSort(int low, int high){
    float pivot = getHue(imagePixels[low + (high - low) / 2]);
    int i = low, j = high;
    Pixel a;
    while(i <= j){

      while(getHue(imagePixels[i]) < pivot){
        i++;
      }

      while(getHue(imagePixels[j]) > pivot){
        j--;
      }

      if(i <= j){
        a = imagePixels[i];
        imagePixels[i] = imagePixels[j];
        imagePixels[j] = a;
        i++;
        j--;
        if(i == j){break;}
      }
      this.redraw_self(high);
    }


    if(low < j){quickSort(low, j);}
    if(i < high){quickSort(i, high);}

  }

  int getIntFromPixel(Pixel input){
    Color temp = input.getColor();
    return 0;
  }

  /**
   * Redraws image
   * requires integer input that limits point at which pixels are drawn to
   * only redraws once per 'line' of pixels have been redrawn to conserve
   * performance.
   */
  void redraw_self(int p){
    iterator++;
    if(iterator % this.getWidth() == 0){
      Pixel[] realpixels = getPixels();
      for (int i = 0; i < p; i++){
        realpixels[i].setColor(imagePixels[i].getColor());
      }
      this.repaint();
    }
  }

  /**
   * Modification of redraw_self() that redraws without waiting for iterator count
   */
  void redrawOnce(){
    Pixel[] realPixels = getPixels();
    for (int i = 0; i < realPixels.length; i++){
      realPixels[i].setColor(imagePixels[i].getColor());
      if(i%(realPixels.length/1000) == 0 ){this.repaint();}
    }

  }

  /**
   * Randomizes pixels of an existing image. Replaces each pixel with noise.
   */
  public void randomizeImage(){
    Pixel[] pix = this.getPixels();
    Random rand = new Random();
    float r = (float)0.001;
    for(Pixel p : pix){
      r = rand.nextFloat();
      p.setRed((int)(155 + 100 * Math.sin(r * 20)));
      p.setGreen((int)(155 + 100 * Math.sin(r * 20 + 2 * Math.PI /3)));
      p.setBlue((int)(155 + 100 * Math.sin(r * 20 + 4 * Math.PI /3)));
    }
    imagePixels = this.copy().getPixels();
  }

  /*
   * getHue grabs the hue value of an input pixel using java.awt.Color 's native Color.RGBtoHSB method
   */

  public float getHue(Pixel p){
    float[] hsv = new float[3];
    Color.RGBtoHSB(p.getRed(), p.getGreen(), p.getBlue(), hsv);
    return hsv[0];
  }

  /*
   * getValue grabs the value value of an input pixel using java.awt.Color 's native Color.RGBtoHSB method.
   * No method in the program uses this method.
   */
  public float getValue(Pixel p){
    float[] hsv = new float[3];
    Color.RGBtoHSB(p.getRed(), p.getGreen(), p.getBlue(), hsv);
    return hsv[2];
  }

  public int getRadixHue(Pixel p){
    float[] hsv = new float[3];
    Color.RGBtoHSB(p.getRed(), p.getGreen(), p.getBlue(), hsv);
    return (int)(100000*hsv[0]);

  }

  public int radixMax(Pixel pArr[]){
    int max = getRadixHue(pArr[0]);
    for(int i = 1; i < pArr.length; i++){
      if (getRadixHue(pArr[i]) > max){
        max = getRadixHue(pArr[0]);
      }
    }
    return max;
  }
}
