const ArrayListBoiler = [
    {
        dataStructure: "Array list",
        comment: "It is daynamic implementaion of Array list with some basic function present in the plate so that you can start testing your function at soon as possible.",
        working: 
`
//Header files
#include<stdio.h>
#include<stdlib.h>

//Global variable for size of array
int N = 0;


//Different basic Functions

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
        printf("1. Create list");
        printf("2. Push");
        printf("3. Pop");
        printf("4. Print list");
        printf("5. Add element at any index");
        printf("6. Delete element at any index");
        printf("7. Search element in arrayList");
        printf("0. Exit");
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
                printf("Enter the data: ");
                scanf("%d", &data);
                a = push(a, data);
                break;

            case 3:
                data = pop(a);
                printf("%d", data);
                break;

            case 4:
                printList(a);
                break;

            case 5:
                printf("Enter the index: ");
                scanf("%d", &pos);
                printf("Enter the element: ");
                scanf("%d", &data);
                a = addat(a, data, pos);
                break;

            case 6:
                printf("Enter the index: ");
                scanf("%d", &pos);
                a = delat(a, pos);
                break;

            case 7:
                printf("Enter the element to search: ");
                scanf("%d", &data);
                search(a, data);
                break;

            default:
                printf("wrong input");

        }
        if(choice == 0)
            break;
    }

    return 0;
}

int *create_list(int *a)
{
    int data, i, n;
    printf("Enter the number of elements: ");
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
        printf("List is empty");
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
        printf("List is empty");
        return;
    }

    printf("List is");
    for(i=0; i<N; i++)
        printf("%d ", *(a + i));

    printf("");
}

int *addat(int *a, int data, int pos)
{
    int i;

    if(a == NULL){
        printf("List is empty");
        return a;
    }

    if(pos > N-1){
        printf("List is small");
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
        printf("List is small");
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
            printf("%d is present at index %d", data, i);
            return;
        }
    }

    printf("%d is not present in list", data);
}
`
    },
];


export default ArrayListBoiler;