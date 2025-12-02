#include <stdio.h>
#include <string.h>

int main() {
    char str1[200];
    char str2[200];
    int j = 0;
    scanf("%s", str1);

    int len = strlen(str1);

    for (int i = len - 1; i >= 0; i--) {
        str2[j] = str1[i];
        j++;
    }


    printf("%s\n", str2);

    return 0;
}
