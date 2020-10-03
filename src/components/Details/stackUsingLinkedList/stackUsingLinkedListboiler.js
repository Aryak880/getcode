const boiler = [
    {
        dataStructure: "Stack using Linked list",
        comment: "",
        working:
`//Header file and defining max size of the array
#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
} *top = NULL;


//Functions declaration
void push(int data);
int pop();
int peek();
int isEmpty();
void printList();


int main()
{
    int data, choice;

    while(3){
        printf("1. Push element  ");
        printf("2. Pop element  ");
        printf("3. Peek element  ");
        printf("4. Check stack is empty  ");
        printf("5. Print stack elements  ");
        printf("0. Exit  ");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice)
        {
            case 0:
                break;

            case 1:
                printf("  Enter the element: ");
                scanf("%d", &data);
                push(data);
                break;

            case 2:
                printf("  Popped element is: %d  ", pop());
                break;

            case 3:
                printf("  Peeked element is: %d  ", peek());
                break;

            case 4:
                isEmpty() == 1 ? printf("  Stack is empty  ") : printf("  Stack is not empty  ");
                break;

            case 5:
                printList();
                break;

            default:
                printf("  Wrong choice  ");
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
        printf("  Stack overflow  ");
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
        printf("  Stack underflow  ");
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
        printf("  Stack underflow  ");
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
        printf("  Stack is empty  ");
        return;
    }

    p = top;

    printf("  List is  ");
    while(p != NULL){
        printf("%d ", p->data);
        p = p->next;
    }
}
`
    }
];

export default boiler;