#include <stdio.h>
int main(void)
{
    int i, j, length, n;
    char str[50], sub[50][50];
    printf("Enter teh string: ");
    scanf("%s", &str);
    for (i = 0; i < strlen(str); i++)
    {
        j = 0;
        while (!inn(sub[i], str[i + j]))
        {
            sub[i][j] = str[]
        }
    }
}