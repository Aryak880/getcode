#include<stdio.h>
#include<stdlib.h>

struct node
{
    int info;
    struct node *link;
};

struct node *create_list(struct node *start);
void count(struct node *start);
void display(struct node *start);
void search(struct node *start, int data);
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
        printf("5. Add to empty list / add at beginning\n");
        printf("6. Add at end\n");
        printf("7. Add after node\n");
        printf("8. Add before node\n");
        printf("9. Add at position\n");
        printf("10. Delete\n");
        printf("11. Reverse\n");
        printf("12. Quit\n");
	printf("Enter your choice: ");
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
            break;

	    default:
		printf("Wrong choice\n");
	}

	if(choice == 12)
		break;
    }

    return 0;
}

void count(struct node *start)
{
    struct node *p;
    int i = 0;

    p = start;

    while(p != NULL)
    {
        i++;
        p = p->link;
    }

    printf("Number of nodes are: %d\n\n", i);
}

void display(struct node *start)
{
    struct node *p;

    if(start == NULL){
        printf("List is empty\n\n");
        return;
    }
    p = start;

    printf("List of element\n");
    while(p != NULL){
        printf("%d ", p->info);
        p = p->link;
    }

    printf("\n\n");
}

void search(struct node *start, int data)
{
    struct node *p;
    int i = 1;
    p = start;

    if(start == NULL){
        printf("List is empty\n\n");
        return;
    }

    while(p != NULL){
        if(p->info == data){
            printf("%d is present at index %d\n\n", data, i);
            return;
        }
        i++;
        p = p->link;
    }

    printf("%d is not present in list\n\n", data);
}

struct node *create_list(struct node *start)
{
    int data, i, n;
    printf("Enter number of elements do you want to enter: ");
    scanf("%d", &n);
    start = NULL;

    if(n==0)
        return start;

    printf("Enter the data into node: ");
    scanf("%d", &data);
    start = addatbeg(start, data);

    for(i=2; i<=n; i++){
	printf("Enter the data into node: ");
	scanf("%d", &data);
	start = addatend(start, data);
    }

    return start;
}

struct node *addatbeg(struct node *start, int data)
{
    struct node *p;

     p = (struct node *)malloc(sizeof(struct node));
     p->info = data;

     p->link = start;
     start = p;

     return start;
}

struct node *addatend(struct node *start, int data)
{
    struct node *p, *temp;
    p = start;
    temp = (struct node *)malloc(sizeof(struct node));

    temp->info = data;
    temp->link = NULL;

    while(p->link != NULL)
        p = p->link;

    p->link = temp;

    return start;
}

struct node *addafter(struct node *start, int data, int item)
{
    struct node *p, *temp;
    p = start;

    while(p != NULL){
        if(p->info == item){
            temp = (struct node*)malloc(sizeof(struct node));
            temp->info = data;
            temp->link = p->link;
            p->link = temp;
            return start;
        }

        p = p->link;
    }

    printf("%d doesn't present in list\n\n", data);
    return start;
}

struct node *addbefore(struct node *start, int data, int item)
{
    struct node *p, *temp;
    p = start;

    if(start == NULL){
        printf("List is empty\n\n");
        return start;
    }

    if(start->info == item){
        temp = (struct node *)malloc(sizeof(struct node));
        temp->info = data;
        temp->link = start;
        start = temp;
        return start;
    }

    while(p->link != NULL){
        if(p->link->info == item){
            temp = (struct node *)malloc(sizeof(struct node));
            temp->info = data;
            temp->link = p->link;
            p->link = temp;
            return start;
        }

        p = p->link;
    }

    printf("%d is not present in list\n\n", item);
    return start;
}

struct node *addatpos(struct node *start, int data, int pos)
{
    struct node *p, *temp;
    int i = 0;
    p = start;

    temp = (struct node*)malloc(sizeof(struct node));
    temp->info = data;

    if(pos == 1){
        temp->link = start;
        start = temp;
        return start;
    }

    for(i=1; i<pos-1 && p != NULL; i++)
        p = p->link;

    if(p == NULL){
        printf("List is small\n\n");
    }
    else{
        temp->link = p->link;
        p->link = temp;
    }

    return start;
}

struct node *reverse(struct node *start)
{
    struct node *pre, *ptr, *next;
    ptr = start;
    pre = NULL;

    while(ptr != NULL){
        next = ptr->link;
        ptr->link = pre;
        pre = ptr;
        ptr = next;
    }
    start = pre;
    return start;
}

struct node *del(struct node *start, int data)
{
    struct node *p, *temp;
    p = start;

    if(start == NULL){
        printf("List is empty\n");
        return start;
    }

    if(start->info == data){
        temp = start;
        start = start->link;
        free(temp);
        return start;
    }

    while(p->link != NULL){
        if(p->link->info == data){
            temp = p->link;
            p->link = temp->link;
            free(temp);
            return start;
        }

        p = p->link;
    }

    printf("%d is not present in list\n\n");
    return start;
}


