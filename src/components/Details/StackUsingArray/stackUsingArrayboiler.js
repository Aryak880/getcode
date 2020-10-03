const boiler = [
    {
        dataStructure: "Stack using Array",
        comment: "",
        working:
`//Header file and defining max size of the array
#include<stdio.h>
#define MAX 20

int stack[MAX];
int top = -1;


//Functions declaration

void push(int item);
int pop();
int peek();
int isEmpty();
int isFull();
void printList();


int main()
{
    int choice, item;

    while(3){
        printf("1. Push element  ");
        printf("2. Pop element  ");
        printf("3. Peek element  ");
        printf("4. List is empty?  ");
        printf("5. List is Full?  ");
        printf("6. Print list  ");
        printf("0. Exit  ");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice)
        {
            case 0:
                break;

            case 1:
                printf("  Enter the element: ");
                scanf("%d", &item);
                push(item);
                break;

            case 2:
                printf("  Popped element is: %d  ", pop());
                break;

            case 3:
                printf("  Peeked element is: %d  ", peek());
                break;

            case 4:
                isEmpty() == 1 ? printf("  List is empty  ") : printf("  List is not empty  ");
                break;

            case 5:
                isFull() == 1 ? printf("  List is full  ") : printf("  List is not full  ");
                break;

            case 6:
                printList();
                break;

            default:
                printf("  Wrong input  ");

        }
        if(choice == 0)
            break;
    }

    return 0;
}

void push(int item)
{
    if(isFull()){
        printf("  Stack overflow  ");
        return;
    }
    stack[++top] = item;
}

int pop()
{
    if(isEmpty()){
        printf("  Stack underflow  ");
        return -255;
    }

    return stack[top--];
}

int peek()
{
    if(isEmpty()){
        printf("  Stack underflow  ");
        return -255;
    }

    return stack[top];
}

int isEmpty()
{
    return (top == -1);
}

int isFull()
{
    return (top == (MAX - 1));
}

void printList()
{
    int i;

    if(isEmpty()){
        printf("  Stack underflow  ");
        return;
    }

    printf("Stack items are  ");
    for(i=top; i>=0; i--){
        printf("%d ", stack[i]);
    }
}
`
    }
];

export default boiler;