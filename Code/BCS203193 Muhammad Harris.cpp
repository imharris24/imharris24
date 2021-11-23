// Muhammad Harris BCS203193
// Lab 6
// Linked List

#include <iostream>
#include <string>
#include <conio.h>
#include <windows.h>
using namespace std;

// Task 1
/*
Implement the following functions for linked list:
1) Insert front
2) Insert End
3) Insert after number
4) Delete front
5) Delete End
6) Delete any number from list
7) Display all element
8) Limit user so that he/she can only add 10 numbers in the list. After that give error that list is full.
*/
namespace Task1
{
    struct LinkedList
    {
        int Number = 0;
        LinkedList *Next = NULL;
    };
    void InsertFront(LinkedList *Head)
    {
        LinkedList *L = new LinkedList;
        cout << "\nEnter a Number : ";
        cin >> L->Number;
        cin.ignore();
        if (Head == NULL)
        {
            Head = L;
        }
        else
        {
            L->Next = Head;
            Head = L;
        }
        cout << "Number has been Inserted in Linked List...\n";
    }
    void InsertEnd(LinkedList *Head)
    {
        LinkedList *L = new LinkedList;
        cout << "\nEnter a Number : ";
        cin >> L->Number;
        cin.ignore();
        if (Head == NULL)
        {
            Head = L;
        }
        else
        {
            LinkedList *i = Head;
            while (i->Next != NULL)
            {
                i = i->Next;
            }
            i->Next = L;
        }
        cout << "Number has been Inserted in Linked List...\n";
    }
    void InsertAfterNumber(LinkedList *Head)
    {
        if (Head == NULL)
        {
            cout << "\nLinked List is Empty, Insert At Front...\n";
            return;
        }
        else
        {
            int Search = 0;
            LinkedList *L = new LinkedList;
            bool Found = false;
            cout << "\nEnter a Number to Insert After : ";
            cin >> Search;
            LinkedList *i = Head;
            while (i->Next != NULL)
            {
                if (i->Number == Search)
                {
                    Found = true;
                    break;
                }
                i = i->Next;
            }
            if (Found == false)
            {
                cout << "Number does not exit in Linked List...\n";
                return;
            }
            cout << "Number Found in Linked List...\nEnter a Number to Insert : ";
            cin >> L->Number;
            cin.ignore();
            L->Next = i->Next;
            i->Next = L;
            cout << "Number has been Inserted in the Linked List...\n";
        }
    }
    void DeleteFront(LinkedList *Head)
    {
        if (Head == NULL)
        {
            cout << "\nLinked List is Empty...\n";
            return;
        }
        LinkedList *i = Head;
        Head = Head->Next;
        delete i;
        cout << "\nFirst Node of Linked List has been Deleted...\n";
    }
    void DeleteLast(LinkedList *Head)
    {
        if (Head == NULL)
        {
            cout << "\nLinked List is Empty...\n";
            return;
        }
        LinkedList *SecondLast = Head;
        LinkedList *i = NULL;
        while (SecondLast->Next->Next != NULL)
        {
            SecondLast = SecondLast->Next;
        }
        i = SecondLast->Next;
        SecondLast->Next = NULL;
        delete i;
        cout << "\nLast Node of Linked List has been Deleted...\n";
    }
    void DeleteByNumber(LinkedList *Head)
    {
        if (Head == NULL)
        {
            cout << "\nLinked List is Empty...\n";
            return;
        }
        int Search = 0;
        bool Found = false;
        cout << "\nEnter a Number to Delete : ";
        cin >> Search;
        cin.ignore();
        LinkedList *i = Head;
        while (i->Next != NULL)
        {
            if (i->Number == Search)
            {
                Found == true;
                break;
            }
            i = i->Next;
        }
        if (Found == false)
        {
            cout << "Number not found in linked list...\n";
            return;
        }
        LinkedList *Previous = Head;
        while (Previous->Next != i)
        {
            Previous = Previous->Next;
        }
        Previous->Next = i->Next;
        delete i;
        cout << "Node containing " << Search << " has been deleted...\n";
    }
    void Display(LinkedList *Head)
    {
        if (Head == NULL)
        {
            cout << "\nLinked List is empty...\n";
            return;
        }
        cout << "\nDisplaying Entire Linked List\n";
        LinkedList *i = Head;
        while (i->Next != NULL)
        {
            cout << i->Number << " -> ";
            i = i->Next;
        }
        cout << "NULL\n";
    }
    void Task()
    {
        LinkedList *Head = NULL;
        int NodeCount = 0;
    }
}