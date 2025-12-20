#include <stdio.h>

int main() {
    FILE *pointer;
    char name[1000];
    char name1[1000];
    int i;

    
    pointer = fopen("index.txt", "r");

    fgets(name, sizeof(name), pointer);
    fclose(pointer);

    
    for (i = 0; i < sizeof(name); i++) {
        if (name[i] == 'z') {
            name1[i] = 'c';
        } else {
            name1[i] = name[i];
        }
    }
    

    pointer = fopen("index.txt", "w");
    fprintf(pointer, "%s", name1);
    fclose(pointer);

    printf("%s", name1);

    return 0;
}


