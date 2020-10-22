//Including header file and declaring linked list
#include<stdio.h>
#include<stdlib.h>

struct node
{
    int pre;
    int data;
    struct node *next;
} *front = NULL;


void insert(int data, int pre);
void printList();
int del();
int isEmpty();

int main()
{
    int choice, data, pre;

    while(3)
    {
        printf("\n1. Insert element\n");
        printf("2. Delete element\n");
        printf("3. Print list\n");
        printf("4. Is queue empty\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice)
        {
            case 0:
                break;

            case 1:
                printf("Enter the data and priority of data\n");
                scanf("%d%d", &data, &pre);
                insert(data, pre);
                break;

            case 2:
                printf("Deleted item is %d", del());
                break;

            case 3:
                printList();

            case 4:
                isEmpty() == 1 ? printf("\nList is empty\n") : printf("\nList is not empty\n");
                break;

            default:
                printf("\nWrong input\n");

        }

        if(choice == 0)
            break;
    }

    return 0;
}

void printList()
{
    struct node *p;

    if(isEmpty()){
        printf("\nList is empty\n");
        return;
    }

    p = front;

    printf("Queue is\n");
    while(p != NULL){
        printf("%d ", p->data);
        p = p->next;
    }

    printf("\n\n");
}

int isEmpty()
{
    return front == NULL;
}

int del()
{
    int data;
    struct node *temp;

    if(isEmpty()){
        printf("\nQueue underflow\n");
        return -255;
    }

    temp = front;
    data = front->data;
    front = front->next;
    free(temp);

    return data;
}

void insert(int data, int pre)
{
    struct node *p, *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("\nMemory not available\n");
        return;
    }

    temp->data = data;
    temp->pre = pre;

    if(isEmpty() || pre < front->pre){
        temp->next = front;
        front = temp;
        return;
    }

    p = front;

    while(p->next != NULL && p->next->pre <= pre)
        p = p->next;

    temp->next = p->next;
    p->next = temp;
}



