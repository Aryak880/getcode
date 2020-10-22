#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
} *top = NULL;


void push(int data);
int pop();
int peek();
int isEmpty();
void printList();


int main()
{
    int data, choice;

    while(3){
        printf("1. Push element\n");
        printf("2. Pop element\n");
        printf("3. Peek element\n");
        printf("4. Check stack is empty\n");
        printf("5. Print stack elements\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice)
        {
            case 0:
                break;

            case 1:
                printf("\nEnter the element: ");
                scanf("%d", &data);
                push(data);
                break;

            case 2:
                printf("\nPopped element is: %d\n", pop());
                break;

            case 3:
                printf("\nPeeked element is: %d\n", peek());
                break;

            case 4:
                isEmpty() == 1 ? printf("\nStack is empty\n") : printf("\nStack is not empty\n");
                break;

            case 5:
                printList();
                break;

            default:
                printf("\nWrong choice\n");
        }

        if(choice == 0)
            break;
    }
    return 0;
}

void push(int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("\nStack overflow\n");
        return;
    }

    temp->data = data;
    temp->next = top;
    top = temp;
}

int pop()
{
    struct node *temp;
    int r;

    if(isEmpty()){
        printf("\nStack underflow\n");
        return -255;
    }

    temp = top;
    r = top->data;
    top = top->next;
    free(temp);

    return r;
}

int peek()
{
    if(isEmpty()){
        printf("\nStack underflow\n");
        return -255;
    }

    return top->data;
}

int isEmpty()
{
    return (top == NULL);
}

void printList()
{
    struct node *p;

    if(isEmpty()){
        printf("\nStack is empty\n");
        return;
    }

    p = top;

    printf("\nList is\n");
    while(p != NULL){
        printf("%d ", p->data);
        p = p->next;
    }

    printf("\n\n");
}



