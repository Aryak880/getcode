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
    int data;
    struct node *next;
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
        p = p->next;
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
        printf("%d ", p->data);
        p = p->next;
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
        if(p->data == data){
            printf("%d is present at index %d", data, i);
            return;
        }
        i++;
        p = p->next;
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
     p->data = data;

     p->next = start;
     start = p;

     return start;
}

struct node *addatend(struct node *start, int data)
{
    struct node *p, *temp;
    p = start;
    temp = (struct node *)malloc(sizeof(struct node));

    temp->data = data;
    temp->next = NULL;

    while(p->next != NULL)
        p = p->next;

    p->next = temp;

    return start;
}

struct node *addatpos(struct node *start, int data, int pos)
{
    struct node *p, *temp;
    int i = 0;
    p = start;

    temp = (struct node*)malloc(sizeof(struct node));
    temp->data = data;

    if(pos == 1){
        temp->next = start;
        start = temp;
        return start;
    }

    for(i=1; i<pos-1 && p != NULL; i++)
        p = p->next;

    if(p == NULL){
        printf("List is small");
    }
    else{
        temp->next = p->next;
        p->next = temp;
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

    if(start->data == data){
        temp = start;
        start = start->next;
        free(temp);
        return start;
    }

    while(p->next != NULL){
        if(p->next->data == data){
            temp = p->next;
            p->next = temp->next;
            free(temp);
            return start;
        }

        p = p->next;
    }

    printf("%d is not present in list");
    return start;
}

`
    }
];



export default Boiler;