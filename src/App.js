import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {LinkedListCard, ArrayListCard, Doublylinkedlist, 
        LinkedListWithHeader, Navbar, Error, Footer,
        CircularLinkedList, StackUsingArray, StackUsingLinkedList,
        QueueUsingArray, QueueUsingLinkedList
      } from './components';


function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path='/' component={LinkedListCard} exact />
        <Route path='/arraylist' component={ArrayListCard} />
        <Route path='/doublylinkedlist' component={Doublylinkedlist}/>
        <Route path='/linkedlistwithheadernode' component={LinkedListWithHeader} />
        <Route path='/circularlinkedlist' component={CircularLinkedList} />
        <Route path='/stackusingarray' component={StackUsingArray} />
        <Route path='/stackusinglinkedlist' component={StackUsingLinkedList} />
        <Route path='/queueusingarray' component={QueueUsingArray} />
        <Route path='/queueusinglinkedlist' component={QueueUsingLinkedList} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
