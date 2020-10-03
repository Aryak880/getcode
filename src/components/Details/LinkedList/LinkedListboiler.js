const Boiler = [
    {
        dataStructure: "Linked list",
        comment: `This is simple emplementation of linked list with some basic function present in the plate
        so that you can start testing you function at soon as possible.`,
        working:
`#include<stdio.h>
#include<stdlib.h>

struct node
{
    int info;
    struct node *link;
};


//Some basic function declaration
void count(struct node *start);
void display(struct node *start);
void search(struct node *start, int data);
struct node *create_list(struct node *start);
struct node *del(struct node *start, int data);
struct node *addatbeg(struct node *start, int data);
struct node *addatend(struct node *start, int data);
struct node *addatpos(struct node *start, int data, int pos);


//Main function
int main()
{

    struct node *start = NULL;
    int choice, data, item, pos;

    while(1){
        printf("1. Create List");
        printf("2. Display");
        printf("3. Count");
        printf("4. Search");
        printf("5. Add to empty list / add at beginning");
        printf("6. Add at end");
        printf("7. Add at position");
        printf("8. Delete");
        printf("0. Exit");
	printf("Enter your choice: ");
	scanf("%d", &choice);

	switch(choice)
	{
        case 0:
            break;

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

	    default:
		printf("Wrong choice");
	}

	if(choice == 0)
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

    printf("Number of nodes are: %d", i);
}

void display(struct node *start)
{
    struct node *p;

    if(start == NULL){
        printf("List is empty");
        return;
    }
    p = start;

    printf("List of element");
    while(p != NULL){
        printf("%d ", p->info);
        p = p->link;
    }

    printf("");
}

void search(struct node *start, int data)
{
    struct node *p;
    int i = 1;
    p = start;

    if(start == NULL){
        printf("List is empty");
        return;
    }

    while(p != NULL){
        if(p->info == data){
            printf("%d is present at index %d", data, i);
            return;
        }
        i++;
        p = p->link;
    }

    printf("%d is not present in list", data);
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
        printf("List is small");
    }
    else{
        temp->link = p->link;
        p->link = temp;
    }

    return start;
}


struct node *del(struct node *start, int data)
{
    struct node *p, *temp;
    p = start;

    if(start == NULL){
        printf("List is empty");
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

    printf("%d is not present in list");
    return start;
}

`
    }
];



export default Boiler;