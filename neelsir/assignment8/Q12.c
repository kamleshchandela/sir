// Online C compiler to run C program online
#include <stdio.h>

int table (int num , int count ){
    int pro = num * count;
    printf("%d * %d = %d \n",num , count , pro);
    
    count ++;
    if(count == 11){
        return 0;
    }
    return table (num , count);
    
}
void table1 (int num , int count ){
    int pro = num * count;
    printf("%d * %d = %d \n",num , count , pro);
    
    count ++;
    if(count == 11){
        return;
    }
    table (num , count);
    
}





int main() {
    int input ;
    printf("input : ");
    scanf("%d", &input);
    
    printf("int : \n");
    table( input, 1 );
    printf("void : \n");
    table1( input, 1 );

    return 0;
}