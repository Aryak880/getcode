#include<stdio.h>
#include<stdlib.h>

struct node
{
    int info;
    struct node *link;
};

void count(struct node *last);
void display(struct node *last);
void splitInTwoHalf(struct node *, struct node **, struct node **);
void search(struct node *last, int data);
struct node *create_list(struct node *last);
struct node *addatbeg(struct node *last, int data);
struct node *addatend(struct node *last, int data);
struct node *addafter(struct node *last, int data, int item);
struct node *addbefore(struct node *last, int data, int item);
struct node *addatpos(struct node *last, int data, int pos);
struct node *del(struct node *last, int data);
struct node *delAtPos(struct node *last, int pos);

int main()
{

    struct node *last = NULL, *last2 = NULL, *last1 = NULL;
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
        printf("11. Split list into two half\n");
        printf("12. Delete at position\n");
        printf("0. Quit\n");
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
		printf("Enter the element after which to insert: ");
		scanf("%d", &item);
		last = addafter(last, data, item);
		break;

	    case 8:
		printf("Enter the element to be inserted: ");
		scanf("%d", &data);
		printf("Enter the element before which to insert: ");
		scanf("%d", &item);
		last = addbefore(last, data, item);
		break;

	    case 9:
		printf("Enter the element to be inserted: ");
		scanf("%d", &data);
		printf("Enter teh position at which to insert: ");
		scanf("%d", &pos);
		last = addatpos(last, data, pos);
		break;

	    case 10:
		printf("Enter the element to be deleted: ");
		scanf("%d", &data);
		last = del(last, data);
		break;

        case 11:
            splitInTwoHalf(last, &last1, &last2);
            printf("First half list is\n");
            display(last1);
            printf("Second half list is\n");
            display(last2);
            break;

        case 12:
            printf("Enter the position: ");
            scanf("%d", &item);
            last = delAtPos(last, item);
            break;

	    default:
		printf("Wrong choice\n");
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

    printf("Number of nodes are: %d\n\n", i);
}

void display(struct node *last)
{
    struct node *p;

    if(last == NULL){
        printf("List is empty\n\n");
        return;
    }
    p = last->link;

    printf("List of element\n");
    do{
        printf("%d ", p->info);
        p = p->link;
    }while(p != last->link);

    printf("\n\n");
}

void search(struct node *last, int data)
{
    struct node *p;
    int i = 1;

    if(last == NULL){
        printf("List is empty\n\n");
        return;
    }

    p = last->link;

    do{
        if(p->info == data){
            printf("%d is present at index %d\n\n", data, i);
            return;
        }
        i++;
        p = p->link;
    }while(p != last->link);

    printf("%d is not present in list\n\n", data);
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

    if(last == NULL){
        temp->info = data;
        temp->link = temp;
        last = temp;
        return last;
    }

    temp->info = data;
    temp->link = last->link;
    last->link = temp;
    last = temp;

    return last;
}

struct node *addafter(struct node *last, int data, int item)
{
    struct node *p, *temp;
    p = last->link;

    do{
        if(p->info == item){
            temp = (struct node*)malloc(sizeof(struct node));
            temp->info = data;
            temp->link = p->link;
            p->link = temp;
            return last;
        }

        p = p->link;
    }while(p != last->link);

    printf("%d doesn't present in list\n\n", data);
    return last;
}

struct node *addbefore(struct node *last, int data, int item)
{
    struct node *p, *temp;
    p = last->link;

    if(last == NULL){
        printf("List is empty\n\n");
        return last;
    }

    if(last->info == item){
        temp = (struct node *)malloc(sizeof(struct node));
        temp->info = data;
        temp->link = last;
        last = temp;
        return last;
    }

    do{
        if(p->link->info == item){
            temp = (struct node *)malloc(sizeof(struct node));
            temp->info = data;
            temp->link = p->link;
            p->link = temp;
            return last;
        }

        p = p->link;
    }while(p->link != last->link);

    printf("%d is not present in list\n\n", item);
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
        printf("List is empty\n\n");
        return last;
    }

    if(last->link == last && last->info == data){
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

    printf("%d is not present in list\n\n", data);

    return last;
}


void splitInTwoHalf(struct node *last, struct node **last1, struct node **last2)
{
    struct node *p;
    int len1, len2, i = 0;

    *last1 = NULL;
    *last2 = NULL;

    p = last->link;

    do
    {
        i++;
        p = p->link;
    }while(p != last->link);

    if(i%2 == 0){
        len1 = i/2;
        len2 = i/2;
    }else{
        len1 = i/2 + 1;
        len2 = i/2;
    }

    p = last->link;

    for(i=1; i<=len1; i++){
        *last1 = addatend(*last1, p->info);
        p = p->link;
    }

    for(i=1; i<=len2; i++){
        *last2 = addatend(*last2, p->info);
        p = p->link;
    }
}


struct node *delAtPos(struct node *last, int pos)
{
    struct node *temp, *p;
    int i = 0;

    p = last;

    do{
        i++;
        p = p->link;
    }while(p != last->link && i < pos - 1);

    if(p == last->link){
        printf("List is small\n");
        return last;
    }

    temp = p->link;
    p->link = temp->link;
    free(temp);

    return last;
}


