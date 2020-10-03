const ArrayListFunciton = [
    {
        funName: "Create a array",
        working:
`//Function declaration
//Create list funciton use push function to create list
int *create_list(int *a);
int *push(int *a, int data);

/*
1. Function argument
        a. A int pointer of the array

2. Function return pointer of array
3. Make sure you have a global int variable N
*/

//Function defination
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
`
    },
    {
        funName: "Push element at end of list",
        working:
`//Function declaration
int *push(int *a, int data);

/*
1. Function arguments
        a. pointer of array
        b. data to be added

2. Function return pointer of array
3. Make sure you have a global int variable N
*/


//Function defination
int *push(int *a, int data)
{
    a = (int *)realloc(a, (N+1)*sizeof(int));

    *(a+N) = data;
    N++;

    return a;
}
`
    },
    {
        funName: "Add element at position(index)",
        working:
`//Function declaration
int *addat(int *a, int data, int pos);

/*
1. Function argument
        a. pointer of array
        b. data to be added
        c. position(index)
2. Function return pointer of array
3. Make sure you have a global int variable N
*/

//Function defination
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
`
    },
    {
        funName: "Print list",
        working:
`//Function declaration
void printList(int *a);

/*
1. Function argument
        a. array pointer
2. Function return void
3. Make sure you have a global int variable N
*/

//Function defination
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
}
`
    },
    {
        funName: "Delete at the index",
        working:
`//Function declaration
int *delat(int *a, int pos);

/*
1. Function arguments
        a. pointer of array
        b. position of the index element to be deleted
2. Function return pointer of the array
3. Make sure you have a global int variable N
*/

//Function declaration
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
`
    },
    {
        funName: "Search element",
        working:
`//Function declaration
void search(int *a, int data);

/*
1. Function arguments
        a. pointer of array
        b. data to be searched
2. Function return pointer of the array
3. Make sure you have a global int variable N
*/

//Function defination
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
    {
        funName: "Pop last element",
        working:
`//Function declaration
int pop(int *a);

/*
1. Function arguments
        a. pointer of array
2. Function return last element if empty return -255
3. Make sure you have a global int variable N
*/

//Function defination
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
`
    }
];



export default ArrayListFunciton;