#include<stdio.h>
#include<stdlib.h>

struct node
{
    struct node *prev;
    int info;
    struct node *next;
};

struct node *create_list(struct node *start);
void count(struct node *start);
void display(struct node *start);
void search(struct node *start, int data);
struct node *addtoempty(struct node *start, int data);
struct node *addatbeg(struct node *start, int data);
struct node *addatend(struct node *start, int data);
struct node *addafter(struct node *start, int data, int item);
struct node *addbefore(struct node *start, int data, int item);
struct node *addatpos(struct node *start, int data, int pos);
struct node *reverse(struct node *start);
struct node *del(struct node *start, int data);

int main()
{

    struct node *start = NULL;
    int choice, data, item, pos;

    while(1){
        printf("1. Create List\n");
        printf("2. Display\n");
        printf("3. Count\n");
        printf("4. Search\n");
        printf("5. Add to beg. list\n");
        printf("6. Add at end\n");
        printf("7. Add after node\n");
        printf("8. Add before node\n");
        printf("9. Add at position\n");
        printf("10. Delete\n");
        printf("11. Reverse\n");
        printf("12. Add at empty\n");
        printf("13. Quit\n");
	printf("Enter your choice: \n");
	scanf("%d", &choice);

	switch(choice)
	{
	    case 1:
		start = create_list(start);
		break;

	    case 2:
		display(start);
		break;

	    case 3:
		count(start);
		break;

	    case 4:
		printf("Enter the element to be searched: ");
		scanf("%d", &data);
		search(start, data);
		break;

	    case 5:
		printf("Enter the element to be inserted: ");
		scanf("%d", &data);
		start = addatbeg(start, data);
		break;

	    case 6:
		printf("Enter the element to be inserted: ");
		scanf("%d", &data);
		start = addatend(start, data);
		break;

	    case 7:
		printf("Enter the element to be inserted: ");
		scanf("%d", &data);
		printf("Enter the element after which to insert: ");
		scanf("%d", &item);
		start = addafter(start, data, item);
		break;

	    case 8:
		printf("Enter the element to be inserted: ");
		scanf("%d", &data);
		printf("Enter the element before which to insert: ");
		scanf("%d", &item);
		start = addbefore(start, data, item);
		break;

	    case 9:
		printf("Enter the element to be inserted: ");
		scanf("%d", &data);
		printf("Enter teh position at which to insert: ");
		scanf("%d", &pos);
		start = addatpos(start, data, pos);
		break;

	    case 10:
		printf("Enter the element to be deleted: ");
		scanf("%d", &data);
		start = del(start, data);
		break;

	    case 11:
		start = reverse(start);
		break;

		case 12:
        printf("Enter the enter to add: ");
        scanf("%d", &data);
        start = addtoempty(start, data);
        break;

        case 13:
            break;

	    default:
		printf("Wrong choice\n");
	}

	if(choice == 13)
		break;
    }

    return 0;
}

void display(struct node *start)
{
    struct node *p;
    p = start;

    if(start == NULL){
        printf("List is empty\n\n");
        return;
    }

    printf("List is\n");
    while(p != NULL){
        printf("%d ", p->info);
        p = p->next;
    }

    printf("\n\n");
}

void count(struct node *start)
{
    struct node *p;
    int i = 0;
    p = start;

    while(p != NULL){
        p = p->next;
        i++;
    }

    printf("There is %d number of elements in list\n\n", i);
}

void search(struct node *start, int data)
{
    struct node *p;
    int i = 1;
    p = start;

    while(p != NULL){
        if(p->info == data){
            printf("%d is present at %d\n\n", data, i);
            return;
        }
        p = p->next;
        i++;
    }

    printf("%d is not present in list\n\n");
}

struct node *create_list(struct node *start)
{
    int n, i, data;

    start = NULL;

    printf("Enter the number of node: ");
    scanf("%d", &n);

    if(n > 0){
        printf("Enter the element: ");
        scanf("%d", &data);
        start = addtoempty(start, data);
    }

    for(i=2; i<=n; i++){
        printf("Enter the element: ");
        scanf("%d", &data);
        start = addatend(start, data);
    }

    return start;
}

struct node *addtoempty(struct node *start, int data)
{
    struct node *temp;

    if(start == NULL){
        temp = (struct node *)malloc(sizeof(struct node));
        temp->info = data;
        temp->next = NULL;
        temp->prev = NULL;
        start = temp;

        return start;
    }

    printf("List is not empty\n\n");

    return start;
}

struct node *addatbeg(struct node *start, int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    temp->info = data;
    temp->prev = NULL;
    temp->next = start;
    start->prev = temp;
    start = temp;

    return start;
}

struct node *addatend(struct node *start, int data)
{
    struct node *temp, *p;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = data;
    temp->next = NULL;

    p = start;

    while(p->next != NULL)
        p = p->next;

    p->next = temp;
    temp->prev = p;

    return start;
}

struct node *addafter(struct node *start, int data, int item)
{
    struct node *temp, *p;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = data;
    p = start;

    while(p != NULL){
        if(p->info == item){
            temp->next = p->next;
            temp->prev = p;
            if(p->next != NULL)
                p->next->prev = temp;
            p->next = temp;

            return start;
        }
        p = p->next;
    }

    printf("%d is not present in list\n\n", item);
    return start;
}

struct node *addbefore(struct node *start, int data, int item)
{
    struct node *temp, *p;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = data;

    if(start == NULL){
        printf("List is empty\n\n");
        return start;
    }

    if(start->info == item){
        start->prev = temp;
        temp->next = start;
        temp->prev = NULL;
        start = temp;
        return start;
    }

    p = start;

    while(p->next != NULL){
        if(p->info == item){
            temp->next = p;
            temp->prev = p->prev;
            p->prev->next = temp;
            p->prev = temp;

            return start;
        }
        p = p->next;
    }

    printf("%d is not present in list\n\n", item);

    return start;
}

struct node *addatpos(struct node *start, int data, int pos)
{
    struct node *p, *temp;
    int i;

    if(start == NULL){
        printf("List is empty\n\n");
        return start;
    }

    if(pos == 1)
        return addatbeg(start, data);

    p = start;
    for(i=1; i<pos-1 && p!=NULL; i++)
        p = p->next;

    if(p == NULL){
        printf("List have %d less elements\n\n", pos);
        return start;
    }

    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = data;
    temp->next = p->next;
    temp->prev = p;
    p->next->prev = temp;
    p->next = temp;

    return start;
}

struct node *reverse(struct node *start)
{
    struct node *p1, *p2;
    p1 = start;
    p2 = p1->next;
    p1->next = NULL;
    p1->prev = p2;

    while(p2 != NULL){
        p2->prev = p2->next;
        p2->next = p1;
        p1 = p2;
        p2 = p2->prev;
    }
    start = p1;
    printf("List is reversed\n\n");
    return start;
}

struct node *del(struct node *start, int data)
{
    struct node *p;

    if(start == NULL){
        printf("List is empty\n\n");
        return start;
    }

    if(start->next == NULL){
        if(start->info == data){
            p = start;
            start = NULL;
            free(p);
            return start;
        }else{
            printf("%d is not present in list\n\n", data);
            return start;
        }
    }

    p = start->next;

    while(p->next != NULL){
        if(p->info == data){
            p->next->prev = p->prev;
            p->prev->next = p->next;
            free(p);
            return start;
        }
        p = p->next;
    }

    if(p->info == data){
        p->prev->next = NULL;
        free(p);
        return start;
    }

    printf("Element %d not found\n\n", data);
    return start;
}


