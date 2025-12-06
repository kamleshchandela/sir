// Online C compiler to run C program online
#include <stdio.h>

struct one {
    char name[20];
    char date[20];
    int age;
    char address[50];
    
};
union two {
    char name[20];
    char date[20];
    int age;
    char address[50];
    
};

enum week {
    mon = 10 , tue  , wed = 18  , thu = 20 , fri = 20 , sat = 12 ,sun
};


enum mark {
    c = 40 , js = 40 , git = 40 , math = 40 , html = 40
};









int main() {

    // struct me value niche assign karni he upar nahi karsakte
    struct one obj1 = {
        "kamlesh","232323",12,"chandela"
    };

    // union me sirf ekhi valu dalnihe dusari value yaha niche dalnese vo error dega 
    union two obj2 = {
        "kamleshchandela"
    };
    
    enum week obj11 = mon;
    enum week obj12 = tue;
    enum week obj13 = wed;
    enum week obj14 = thu;
    enum week obj15 = fri;
    enum week obj16 = sat;
    enum week obj17 = sun;
    
    // struct
    printf("%s \n",obj1.name);
    printf("%s \n",obj1.date);
    printf("%d \n",obj1.age);
    printf("%s \n",obj1.address);
    
    // union
    printf("%s \n",obj2.name);
    
    
    
    
    // enum
    printf("%d \n",obj11);
    printf("%d \n",obj12);
    printf("%d \n",obj13);
    printf("%d \n",obj14);
    printf("%d \n",obj15);
    printf("%d \n",obj16);
    printf("%d \n",obj17);
    
    
    enum mark obj21 = c;
    enum mark obj22 = js;
    enum mark obj23 = git;
    enum mark obj24 = math;
    enum mark obj25 = html;
    
    int totle = obj21 + obj22 + obj23 + obj24 + obj25;
    printf("Totle mark : %d \n",totle);
    
    float pers = totle/2;
    
    printf("persentage : %0.2f",pers);
    
    
    
    
    
    

    return 0;
}