CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 13
Spring 2024

__Topic: Recursion__

__A real example__

All of these would have been very easy to implement using a loop instead.  One place where recursion is particularly useful is  _Trees _

Trees are a basic data structure that we can use to represent data in a parent child relationship.

Many problems can be modeled as a tree.  As a matter of fact HTML is actually a tree representation since a parent element can have multiple child elements.

![](../../images/CISC181-Week%2013-Part%2030.jpg)

__Topic: Recursion__

__A real example__

* As it turns out, this is a special kind of tree called a  _binary search tree_ .
* It has some specific properties:
  * A node will have 2 subtrees (possibly empty)
  * Every number in the left sub\-tree must be less than the value stored in the node
  * Every number in the right sub\-tree must be greater than the value stored in the node
  * These must hold for the subtree rooted at every node in the tree.

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

So we can call treeSearch on the right sub\-tree since it is also a tree.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

So we can call treeSearch on the right sub\-tree since it is also a tree.

Now we compare to 85 and again call treeSearch on the right sub\-tree

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

So we can call treeSearch on the right sub\-tree since it is also a tree.

Now we compare to 85 and again call treeSearch on the right sub\-tree

This time, we see that the value is < 126, so we will call treeSearch on the left sub\-tree.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

So we can call treeSearch on the right sub\-tree since it is also a tree.

Now we compare to 85 and again call treeSearch on the right sub\-tree

This time, we see that the value is < 126, so we will call treeSearch on the left sub\-tree.

When we finally compare our value to the node, we have found the node we are looking for.

Note, if we had been looking for 99, we would try the left sub\-tree here, and stop because it is empty.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

So first we need some way to represent a tree in typescript.  We will create a  _node _ class that will contain a number and 2 children.  Those children themselves will be nodes (possibly empty).

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: Recursion__

__A real example__

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

* What are our stop conditions:
  * if (target===undefined)
    * We didn't find it
  * if (target === tree.value)
    * We found it

__Topic: Recursion__

__A real example__

* What are our stop conditions:
  * if (target===undefined)
    * We didn't find it
  * if (target === tree.value)
    * We found it

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (tree === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4"> === value) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: Recursion__

__A real example__

* For the recursive step, we want to search either the left or right subtree based on whether value is less than or greater than the node's value (we already checked === in our stop conditions)
* When we look at a node, there are only 4 possibilities.
  * The node is empty (undefined)
  * It is the node we are looking for
  * It is > than the node we are looking for
  * It is < than the node we are looking for.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(tree: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4"> | undefined, value: number): </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (tree === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4"> === value) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4"><value){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">tree.right</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>  <span style="color:#D4D4D4">      </span>  <span style="color:#6A9955">//must be > value, it is the only </span>  <span style="color:#6A9955">posibility</span>  <span style="color:#6A9955"> left</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">tree.left</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">    }   </span>

<span style="color:#D4D4D4">}</span>

__Topic: Recursion__

__A real example__

If the node is empty (undefined) then the node with the value we are looking for can't exist, so we return false (did not find it).

If the node's value is === the value we are looking for, then we return true (found it).

If the node's value is < the value we are looking for, then if the value is in the tree, it must be in the right sub\-tree, so we call treeSearch recursively to search that sub\-tree.

If the node's value is > the value we are looking for, then if the value is in the tree, it must be in the left sub\-tree, so we call treeSearch recursively to search that sub\-tree

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(tree: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4"> | undefined, value: number): </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (tree === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4"> === value) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4"><value){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">tree.right</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>  <span style="color:#D4D4D4">      </span>  <span style="color:#6A9955">//must be > value, it is the only </span>  <span style="color:#6A9955">posibility</span>  <span style="color:#6A9955"> left</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">tree.left</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">    }   </span>

<span style="color:#D4D4D4">}</span>

__Topic: Recursion__

__A real example__

We can also recursively insert a node into the tree.

Search the tree until you find a node where the subtree you would search next is undefined and add a new node there.  This is our stop condition.

If the sub\-tree we would insert into is not empty, then we just insert into that (smaller) sub\-tree.

_Trees_  are a common data structure in Computer Science and recursion is a much more natural way to deal with them.

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> insert(tree: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">, value: number): void {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value===</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value < </span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.left</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#D4D4D4">tree.left</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            insert(</span>  <span style="color:#D4D4D4">tree.left</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.right</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#D4D4D4">tree.right</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">        }</span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">            insert(</span>  <span style="color:#D4D4D4">tree.right</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: Recursion__

__A real example__

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> treeRoot = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> TreeNode(</span>  <span style="color:#B5CEA8">44</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">insert(treeRoot,</span>  <span style="color:#B5CEA8">26</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">insert (treeRoot,</span>  <span style="color:#B5CEA8">11</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">insert(treeRoot,</span>  <span style="color:#B5CEA8">85</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">insert(treeRoot,</span>  <span style="color:#B5CEA8">82</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">insert(treeRoot,</span>  <span style="color:#B5CEA8">126</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">insert(treeRoot,</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">insert(treeRoot, </span>  <span style="color:#B5CEA8">200</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">insert(treeRoot, </span>  <span style="color:#B5CEA8">65</span>  <span style="color:#D4D4D4">);</span>

This code builds the tree you see to the right.

treeRoot is a reference to node 44.

If I inserted them in a different order, I would have gotten a different tree.

Thought question: What happens if I insert them in sorted order?

__Topic: Recursion__

__Encapsuloation__

* This is nice, but it is NOT very object oriented.
  * A tree node should encapsulate the things we can do to a tree so we won't need external methods.
  * For our implementation of insert, it is pretty straight forward.
  * We just remove the tree parameter, and instead call the member method on the appropriate subtree (which is not null since we already checked that.

<span style="color:#D4D4D4">    insert(value: number): void {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value === </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value < </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left.insert</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right.insert</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Recursion__

__Encapsuloation__

* This is nice, but it is NOT very object oriented.
  * For the search method, it is a little less straight forward.  We need to check for a null subtree before we make the recursive call instead of stopping when the tree is null (otherwise we will not have an object to call search on.
* Now we stop in the parent node if the child node is undefined instead of stopping in the child when the child is undefined

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(value: number): </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4"> === value) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4"> < value) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right.treeSearch</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left.treeSearch</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Recursion__

__Encapsuloation__

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(value: number): </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4"> === value) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4"> < value) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right.treeSearch</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left.treeSearch</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4"> | undefined = </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4"> | undefined = </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number) {}</span>

<span style="color:#D4D4D4">    insert(value: number): void {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value === </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value < </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left.insert</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right.insert</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

This is our Tree class

__Topic: Recursion__

__A real example__

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeRoot</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">44</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">26</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">11</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">85</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">82</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">126</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">200</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">65</span>  <span style="color:#D4D4D4">);</span>

This code builds the tree you see to the right using the member methods.

