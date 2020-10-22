#include<stdio.h>
#define MAX 20

int stack[MAX];
int top = -1;

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
        printf("1. Push element\n");
        printf("2. Pop element\n");
        printf("3. Peek element\n");
        printf("4. List is empty?\n");
        printf("5. List is Full?\n");
        printf("6. Print list\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice)
        {
            case 0:
                break;

            case 1:
                printf("\nEnter the element: ");
                scanf("%d", &item);
                push(item);
                break;

            case 2:
                printf("\nPopped element is: %d\n", pop());
                break;

            case 3:
                printf("\nPeeked element is: %d\n", peek());
                break;

            case 4:
                isEmpty() == 1 ? printf("\nList is empty\n") : printf("\nList is not empty\n");
                break;

            case 5:
                isFull() == 1 ? printf("\nList is full\n") : printf("\nList is not full\n");
                break;

            case 6:
                printList();
                break;

            default:
                printf("\nWrong input\n");

        }
        if(choice == 0)
            break;
    }

    return 0;
}

void push(int item)
{
    if(isFull()){
        printf("\nStack overflow\n");
        return;
    }
    stack[++top] = item;
}

int pop()
{
    if(isEmpty()){
        printf("\nStack underflow\n");
        return -255;
    }

    return stack[top--];
}

int peek()
{
    if(isEmpty()){
        printf("\nStack underflow\n");
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
        printf("\nStack underflow\n");
        return;
    }

    printf("Stack items are\n");
    for(i=top; i>=0; i--){
        printf("%d ", stack[i]);
    }

    printf("\n\n");
}





