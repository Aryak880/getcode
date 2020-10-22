#include<stdio.h>
#include<stdlib.h>

int N = 0;

int *create_list(int *a);
int *push(int *a, int data);
int *addat(int *a, int data, int pos);
int *delat(int *a, int pos);
int pop(int *a);
void printList(int *a);
void search(int *a, int data);



int main()
{
    int *a = NULL;
    int choice, data, pos;

    while(3){
        printf("\n1. Create list\n");
        printf("2. Push\n");
        printf("3. Pop\n");
        printf("4. Print list\n");
        printf("5. Add element at any index\n");
        printf("6. Delete element at any index\n");
        printf("7. Search element in arrayList\n");
        printf("0. Exit\n");
        printf("Enter the choice: ");
        scanf("%d", &choice);

        switch(choice)
        {
            case 0:
                break;

            case 1:
                a = create_list(a);
                break;

            case 2:
                printf("\nEnter the data: ");
                scanf("%d", &data);
                a = push(a, data);
                break;

            case 3:
                data = pop(a);
                printf("\n%d\n\n", data);
                break;

            case 4:
                printList(a);
                break;

            case 5:
                printf("\nEnter the index: ");
                scanf("%d", &pos);
                printf("Enter the element: ");
                scanf("%d", &data);
                a = addat(a, data, pos);
                break;

            case 6:
                printf("\nEnter the index: ");
                scanf("%d", &pos);
                a = delat(a, pos);
                break;

            case 7:
                printf("\nEnter the element to search: ");
                scanf("%d", &data);
                search(a, data);
                break;

            default:
                printf("wrong input\n\n");

        }
        if(choice == 0)
            break;
    }

    return 0;
}

int *create_list(int *a)
{
    int data, i, n;
    printf("\nEnter the number of elements: ");
    scanf("%d", &n);

    for(i=0; i<n; i++){
        printf("Enter element %d: ", i+1);
        scanf("%d", &data);
        a = push(a, data);
    }

    N = n;

    return a;
}

int *push(int *a, int data)
{
    a = (int *)realloc(a, (N+1)*sizeof(int));

    *(a+N) = data;
    N++;

    return a;
}

int pop(int *a)
{
    int *p, temp;

    if(a == NULL){
        printf("List is empty\n\n");
        return -255;
    }

    temp = *(a + N - 1);

    p = (a + N - 1);

    a = (int *)realloc(a, (N-1)*sizeof(int));
    N--;

    free(p);

    return temp;
}

void printList(int *a)
{
    int i;

    if(a == NULL){
        printf("List is empty\n\n");
        return;
    }

    printf("\nList is\n");
    for(i=0; i<N; i++)
        printf("%d ", *(a + i));

    printf("\n\n");
}

int *addat(int *a, int data, int pos)
{
    int i;

    if(a == NULL){
        printf("\nList is empty\n\n");
        return a;
    }

    if(pos > N-1){
        printf("List is small\n");
        return a;
    }

    a = (int *)realloc(a, (N+1)*sizeof(int));
    N++;

    for(i = N-1; i >= pos; i--){
        *(a + i + 1) = *(a + i);
    }

    *(a + pos) = data;

    return a;
}

int *delat(int *a, int pos)
{
    int *temp, i;

    if(pos > N-1){
        printf("List is small\n");
        return;
    }

    for(i=pos+1; i<N; i++)
        *(a+i-1) = *(a + i);

    N--;
    temp = (a + N);

    a = (int *)realloc(a, N*sizeof(int));

    return a;
}

void search(int *a, int data)
{
    int i;

    for(i=0; i<N; i++){
        if(*(a + i) == data){
            printf("%d is present at index %d\n\n", data, i);
            return;
        }
    }

    printf("%d is not present in list\n\n", data);
}












