const boiler = [
    {
        dataStructure: "Dequeue using circular linked list",
        comment: "",
        working:
`//Including header file and defining size of the linked list
#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
} *rear = NULL;


//Some basic function of the dequeue
void insert_rearEnd(int data);
void insert_frontEnd(int data);
int delete_frontEnd();
int delete_rearEnd();
int isEmpty();
void printList();


int main()
{
    int choice, data;

    while(3){
        printf("1. Insert element to the rear end  ");
        printf("2. Insert element to the front end  ");
        printf("3. Delete element from front end  ");
        printf("4. Delete element from rear end  ");
        printf("5. Print list  ");
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
                insert_rearEnd(data);
                break;

            case 2:
                printf("Enter the element: ");
                scanf("%d", &data);
                insert_frontEnd(data);
                break;

            case 3:
                data = delete_frontEnd();
                printf("  Deleted element is: %d  ", data);
                break;

            case 4:
                data = delete_rearEnd();
                printf("  Deleted element is: %d  ", data);
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

void insert_rearEnd(int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("  Queue overflow  ");
        return;
    }

    temp->data = data;

    if(isEmpty()){
        rear = temp;
        rear->next = rear;
        return;
    }

    temp->next = rear->next;
    rear->next = temp;
    rear = temp;
}

void insert_frontEnd(int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("  Queue overflow  ");
        return;
    }

    temp->data = data;

    if(isEmpty()){
        rear = temp;
        rear->next = rear;
        return;
    }

    temp->next = rear->next;
    rear->next = temp;
}

int delete_frontEnd()
{
    int data;
    struct node *temp;

    if(isEmpty()){
        printf("  Queue underflow  ");
        return -255;
    }

    if(rear->next == rear){
        temp = rear;
        rear = NULL;
    }

    else{
        temp = rear->next;
        rear->next = temp->next;
    }

    data = temp->data;
    free(temp);
    return data;
}

int delete_rearEnd()
{
    struct node *p, *temp;
    int data;

    if(isEmpty()){
        printf("  Queue underflow  ");
        return -255;
    }

    p = rear->next;

    while(p->next != rear)
        p = p->next;

    temp = p->next;
    data = temp->data;

    p->next = temp->next;
    free(temp);

    rear = p;

    return data;
}

int isEmpty()
{
    return (rear == NULL);
}

void printList()
{
    struct node *p;
    if(isEmpty()){
        printf("List is empty  ");
        return;
    }

    p = rear->next;
    printf("List is  ");

    do{
        printf("%d ", p->data);
        p = p->next;
    }while(p != rear->next);
}
`
    }
];

export default boiler;