#include<stdio.h>
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
struct node *reverse(struct node *head);


int main()
{
    int choice, data, item, pos;
    struct node *head;
    head = (struct node *)malloc(sizeof(struct node));
    head->data = 0;
    head->next = NULL;

    head = create_list(head);

    while(3){
        printf("1. Display\n");
        printf("2. Add at end\n");
        printf("3. Add before node\n");
        printf("4. Add at position\n");
        printf("5. Delete\n");
        printf("6. Reverse\n");
        printf("7. Print number of element\n");
        printf("0. Exit\n");
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
                head = reverse(head);
                break;

            case 7:
                printf("Number of nodes are: %d\n\n", head->data);
                break;

            default:
                printf("\nWrong choice\n");

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
        printf("List is empty\n");
        return;
    }

    p = head->next;

    printf("List is : \n");
    while(p != NULL){
        printf("%d ", p->data);
        p = p->next;
    }

    printf("\n\n");
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

    printf("%d is not present in list\n\n", item);
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
            printf("There are less than %d elements\n\n", pos);
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

    printf("Element %d not found\n\n", data);
    return head;
}

struct node *reverse(struct node *head)
{
    struct node *prev, *ptr, *next;
    prev = NULL;
    ptr = head->next;

    while(ptr != NULL){
        next = ptr->next;
        ptr->next = prev;
        prev = ptr;
        ptr = next;
    }

    head->next = prev;

    return head;
}









