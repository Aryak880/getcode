const boiler = [
    {
        dataStructure: "Doubly linked list",
        comment: "",
        working:
`
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
        printf("1. Create List   ");
        printf("2. Display   ");
        printf("3. Count   ");
        printf("4. Search   ");
        printf("5. Add to beg. list   ");
        printf("6. Add at end   ");
        printf("7. Add at position   ");
        printf("8. Delete   ");
        printf("9. Add at empty   ");
        printf("0. Quit   ");
	printf("Enter your choice:    ");
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
		printf("Enter teh position at which to insert: ");
		scanf("%d", &pos);
		start = addatpos(start, data, pos);
		break;

	    case 8:
		printf("Enter the element to be deleted: ");
		scanf("%d", &data);
		start = del(start, data);
		break;

		case 9:
        printf("Enter the enter to add: ");
        scanf("%d", &data);
        start = addtoempty(start, data);
        break;

        case 0:
            break;

	    default:
		printf("Wrong choice   ");
	}

	if(choice == 0)
		break;
    }

    return 0;
}

void display(struct node *start)
{
    struct node *p;
    p = start;

    if(start == NULL){
        printf("List is empty   ");
        return;
    }

    printf("List is   ");
    while(p != NULL){
        printf("%d ", p->info);
        p = p->next;
    }

    printf("   ");
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

    printf("There is %d number of elements in list   ", i);
}

void search(struct node *start, int data)
{
    struct node *p;
    int i = 1;
    p = start;

    while(p != NULL){
        if(p->info == data){
            printf("%d is present at %d   ", data, i);
            return;
        }
        p = p->next;
        i++;
    }

    printf("%d is not present in list   ");
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

    printf("List is not empty   ");

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


struct node *addatpos(struct node *start, int data, int pos)
{
    struct node *p, *temp;
    int i;

    if(start == NULL){
        printf("List is empty   ");
        return start;
    }

    if(pos == 1)
        return addatbeg(start, data);

    p = start;
    for(i=1; i<pos-1 && p!=NULL; i++)
        p = p->next;

    if(p == NULL){
        printf("List have %d less elements   ", pos);
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


struct node *del(struct node *start, int data)
{
    struct node *p;

    if(start == NULL){
        printf("List is empty   ");
        return start;
    }

    if(start->next == NULL){
        if(start->info == data){
            p = start;
            start = NULL;
            free(p);
            return start;
        }else{
            printf("%d is not present in list   ", data);
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

    printf("Element %d not found   ", data);
    return start;
}
`
    }
];

export default boiler;