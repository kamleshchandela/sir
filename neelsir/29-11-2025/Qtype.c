
// koi assignment vanchva aapyutu te ma aana releted Q. hato


#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    printf("%p \n",&arr);
    // arr ko store karne ke liye *arr1 = &arr ki jarurat nahihe sidha *arr1 = arr se hi hojata he ha 
    // arr ka first element store hotahe 
    int *arr1 = arr;
    // yato ==> arr == &arr[0]; dono same hi hotahe
    // first element store he vo yahase pata karsakte ho
    // arr == &arr[0]
    printf("*arr = arr --> me first element store hota he : %d \n", *arr1);
    
    // aage vale element ko print karne ke liye pehala to *arr me savehe aagevale ke liye *(arr + 1) uskebad ke liye *(arr + 2)
    
    
    printf("%d \n",sizeof(arr)/4);
    
    for(int i = 0; i < sizeof(arr)/4 ; i++){
        printf("%d \n", *(arr1+i));
    }
    
    
    
    return 0;
}