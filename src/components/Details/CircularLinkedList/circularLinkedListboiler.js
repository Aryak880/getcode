const boiler = [
    {
        dataStructure: "Circular linked list",
        comment: "",
        working:
`#include<stdio.h>
#include<stdlib.h>

struct node
{
    int info;
    struct node *link;
};

void count(struct node *last);
void display(struct node *last);
void search(struct node *last, int data);
struct node *create_list(struct node *last);
struct node *addatbeg(struct node *last, int data);
struct node *addatend(struct node *last, int data);
struct node *addatpos(struct node *last, int data, int pos);
struct node *del(struct node *last, int data);

int main()
{

    struct node *last = NULL;
    int choice, data, item, pos;

    while(1){
        printf("1. Create List   ");
        printf("2. Display   ");
        printf("3. Count   ");
        printf("4. Search   ");
        printf("5. Add to empty list / add at beginning   ");
        printf("6. Add at end   ");
        printf("7. Add at position   ");
        printf("8. Delete   ");
        printf("0. Quit   ");
	printf("Enter your choice: ");
	scanf("%d", &choice);

	switch(choice)
	{
        case 0:
            break;

	    case 1:
		last = create_list(last);
		break;

	    case 2:
		display(last);
		break;

	    case 3:
		count(last);
		break;

	    case 4:
		printf("Enter the element to be searched: ");
		scanf("%d", &data);
		search(last, data);
		break;

	    case 5:
		printf("Enter the element to be inserted: ");
		scanf("%d", &data);
		last = addatbeg(last, data);
		break;

	    case 6:
		printf("Enter the element to be inserted: ");
		scanf("%d", &data);
		last = addatend(last, data);
		break;

	    case 7:
		printf("Enter the element to be inserted: ");
		scanf("%d", &data);
		printf("Enter the position at which to insert: ");
		scanf("%d", &pos);
		last = addatpos(last, data, pos);
		break;

	    case 8:
		printf("Enter the element to be deleted: ");
		scanf("%d", &data);
		last = del(last, data);
		break;

	    default:
		printf("Wrong choice   ");
	}

	if(choice == 0)
		break;
    }

    return 0;
}



void count(struct node *last)
{
    struct node *p;
    int i = 0;

    p = last->link;

    do
    {
        i++;
        p = p->link;
    }while(p != last->link);

    printf("Number of nodes are: %d   ", i);
}

void display(struct node *last)
{
    struct node *p;

    if(last == NULL){
        printf("List is empty   ");
        return;
    }
    p = last->link;

    printf("List of element   ");
    do{
        printf("%d ", p->info);
        p = p->link;
    }while(p != last->link);

    printf("   ");
}

void search(struct node *last, int data)
{
    struct node *p;
    int i = 1;

    if(last == NULL){
        printf("List is empty   ");
        return;
    }

    p = last->link;

    do{
        if(p->info == data){
            printf("%d is present at index %d   ", data, i);
            return;
        }
        i++;
        p = p->link;
    }while(p != last->link);

    printf("%d is not present in list   ", data);
}

struct node *create_list(struct node *last)
{
    int data, i, n;
    printf("Enter number of elements do you want to enter: ");
    scanf("%d", &n);
    last = NULL;

    if(n==0)
        return last;

    printf("Enter the data into node: ");
    scanf("%d", &data);
    last = addatbeg(last, data);

    for(i=2; i<=n; i++){
	printf("Enter the data into node: ");
	scanf("%d", &data);
	last = addatend(last, data);
    }

    return last;
}

struct node *addatbeg(struct node *last, int data)
{
    struct node *p;

     p = (struct node *)malloc(sizeof(struct node));
     p->info = data;

     if(last == NULL){
        last = p;
        last->link = last;
        return last;
     }

     p->link = last->link;
     last->link = p;

     return last;
}

struct node *addatend(struct node *last, int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    temp->info = data;
    temp->link = last->link;
    last->link = temp;
    last = temp;

    return last;
}

struct node *addatpos(struct node *last, int data, int pos)
{
    struct node *p, *temp;
    int i = 0;
    p = last->link;

    temp = (struct node*)malloc(sizeof(struct node));
    temp->info = data;

    if(pos == 1){
        temp->link = last;
        last = temp;
        return last;
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

    return last;
}


struct node *del(struct node *last, int data)
{
    struct node *p, *temp;
    p = last;

    if(last == NULL){
        printf("List is empty   ");
        return last;
    }

    if(last->link == last && last->link == data){
        p = last;
        last = NULL;
        free(p);
        return last;
    }

    if(last->link->info == data){
        p = last->link;
        last->link = p->link;
        free(p);
        return last;
    }

    p = last->link;

    while(p->link != last){
        if(p->link->info == data){
            temp = p->link;
            p->link = temp->link;
            free(temp);
            return last;
        }
        p = p->link;
    }

    if(last->info == data){
        temp = last;
        p->link = last->link;
        last = p;
        free(temp);
        return last;
    }

    printf("%d is not present in list   ", data);

    return last;
}
`
    }
];

export default boiler;