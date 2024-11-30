#include <stdio.h>
#include <math.h>
int main(){
    float a = 20.5;
    float b = 50;
    float c = 14;

    float d = (b * b) - (4 * a * c);
    if (d > 0) {
        float x1 = (((-b) + sqrt(d)) / (2 * a));
        float x2 = (((-b) - sqrt(d)) / (2 * a));
        printf('x1 is: ', x1);
        printf('x2 is: ', x2);
    }
    else if (d == 0) {
        float x = ((-b) / (2 * a));
        printf('x is: ', x);
    }
    else {
        printf('Roots are imaginary');
    }
}
