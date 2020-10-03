const Boiler = [
    {
        dataStructure: "Linked list with header node",
        comment: `This is simple emplementation of linked list with some basic function present in the plate
        so that you can start testing you function at soon as possible.`,
        working:
`#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
};

void display(struct node *head);
struct node *create_list(struct node *head);
struct node *addatend(struct node *head, int data);
struct node *addbefore(struct node *head, int data, int item);
struct node *addatpos(struct node *head, int data, int pos);
struct node *del(struct node *head, int data);


int main()
{
    int choice, data, item, pos;
    struct node *head;
    head = (struct node *)malloc(sizeof(struct node));
    head->data = 0;
    head->next = NULL;

    head = create_list(head);

    while(3){
        printf("1. Display  ");
        printf("2. Add at end  ");
        printf("3. Add before node  ");
        printf("4. Add at position  ");
        printf("5. Delete  ");
        printf("6. Print number of element  ");
        printf("0. Exit  ");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice){

            case 0:
                break;

            case 1:
                display(head);
                break;

            case 2:
                printf("Enter the element to be inserted: ");
                scanf("%d", &data);
                head = addatend(head, data);
                break;

            case 3:
                printf("Enter the element to be inserted: ");
                scanf("%d", &data);
                printf("Enter the element before which to insert: ");
                scanf("%d", &item);
                head = addbefore(head, data, item);
                break;

            case 4:
                printf("Enter the element to be inserted: ");
                scanf("%d", &data);
                printf("Enter the position at which to insert: ");
                scanf("%d", &pos);
                head = addbefore(head, data, pos);
                break;

            case 5:
                printf("Enter the element to be deleted: ");
                scanf("%d", &data);
                head = del(head, data);
                break;

            case 6:
                printf("Number of nodes are: %d  ", head->data);
                break;

            default:
                printf("  Wrong choice  ");

        }

        if(choice == 0)
            break;
    }

    return 0;
}



struct node *create_list(struct node *head)
{
    int i, n, data;

    printf("Enter the number of nodes: ");
    scanf("%d",&n);

    for(i=0; i<n; i++){
        printf("Enter the element to be inserted: ");
        scanf("%d", &data);
        head = addatend(head, data);
    }

    return head;
}

void display(struct node *head)
{
    struct node *p;
    if(head->next == NULL){
        printf("List is empty  ");
        return;
    }

    p = head->next;

    printf("List is :   ");
    while(p != NULL){
        printf("%d ", p->data);
        p = p->next;
    }

    printf("  ");
}


struct node *addatend(struct node *head, int data)
{
    struct node *p, *temp;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->data = data;
    temp->next = NULL;

    head->data = head->data + 1;

    p = head;

    while(p->next != NULL)
        p = p->next;

    p->next = temp;

    return head;
}

struct node *addbefore(struct node *head, int data, int item)
{
    struct node *temp, *p;
    p = head;

    while(p->next != NULL){

        if(p->next->data == item){
            temp = (struct node *)malloc(sizeof(struct node));
            temp->data = data;
            temp->next = p->next;
            p->next = temp;

            head->data = head->data + 1;

            return head;
        }

        p = p->next;
    }

    printf("%d is not present in list  ", item);
    return head;
}


struct node *addatpos(struct node *head, int data, int pos)
{
    struct node *temp, *p;
    int i;

    p = head;

    for(i=1; i<pos; i++){

        p = p->next;
        if(p == NULL){
            printf("There are less than %d elements  ", pos);
            return head;
        }
    }

    temp = (struct node *)malloc(sizeof(struct node));
    temp->data = data;
    temp->next = p->next;
    p->next = temp;

    head->data = head->data + 1;

    return head;
}

struct node *del(struct node *head, int data)
{
    struct node *temp, *p;
    p = head;

    while(p->next != NULL){
        if(p->next->data == data){
            temp = p->next;
            p->next = temp->next;
            free(temp);

            head->data = head->data - 1;
            return head;
        }
        p = p->next;
    }

    printf("Element %d not found  ", data);
    return head;
}
`
    }
];



export default Boiler;