const boiler = [
    {
        dataStructure: "Queue using linked list",
        comment: "",
        working:
`//Header file and defining max size of the array
#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
} *front = NULL, *rear = NULL;


//Function declaration
void enqueue(int data);
int dequeue();
int peek();
int isEmpty();
void printList();


int main()
{
    int choice, data;

    while(3){
        printf("1. Insert element  ");
        printf("2. Dequeue element  ");
        printf("3. Peek element  ");
        printf("4. Print list  ");
        printf("0. Exit  ");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice)
        {
            case 0:
                break;

            case 1:
                printf("Enter the element: ");
                scanf("%d", &data);
                enqueue(data);
                break;

            case 2:
                printf("Dequeued element: %d  ", dequeue());
                break;

            case 3:
                printf("Dequeued element: %d  ", peek());
                break;

            case 4:
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

void enqueue(int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("  Queue overflow  ");
        return;
    }

    temp->data = data;
    temp->next = NULL;

    if(isEmpty())
        front = temp;

    else
    rear->next = temp;

    rear = temp;
}

int dequeue()
{
    int data;
    struct node *temp;

    if(isEmpty()){
        printf("  Queue underflow  ");
        return -255;
    }

    data = front->data;
    temp = front;

    front = front->next;
    free(temp);
    return data;
}

int peek()
{
    if(isEmpty()){
        printf("  Queue underflow  ");
        return -255;
    }

    return front->data;
}

int isEmpty()
{
    return (front == NULL);
}

void printList()
{
    struct node *p;
    if(isEmpty()){
        printf("List is empty  ");
        return;
    }

    p = front;
    printf("List is  ");
    while(p != NULL){
        printf("%d ", p->data);
        p = p->next;
    }
}
`
    }
];

export default boiler;