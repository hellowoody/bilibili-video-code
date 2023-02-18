# console.log

    ```
    log(obj1)
    log(obj1, /* …, */ objN)
    log(msg)
    log(msg, subst1, /* …, */ substN)
    ```
  > 返回值 无（undefined）
  > 输出对象: console.log(JSON.parse(JSON.stringify(obj)))。 
  > 这样可以确保你所看到的 obj 的值是当前输出的值。否则，大多数浏览器会提供一个随着值的变化而不断更新的实时视图。这可能不是你想要的。

    %o or %O	打印 JavaScript 对象。在审阅器点击对象名字可展开更多对象的信息。
    %d or %i	打印整数。支持数字格式化。例如，console.log("Foo %.2d", 1.1) 会输出有先导 0 的两位有效数字：Foo 01。
    %s	        打印字符串。
    %f	        打印浮点数。支持格式化，比如 console.log("Foo %.2f", 1.1) 会输出两位小数：Foo 1.10

    注意 Chrome 不支持精确格式化。

    ```
    for (var i=0; i<5; i++) {
        console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
    }
    ```

    为控制台定义样式,可以使用 %c 为打印内容定义样式：

    ```
    console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
    ```


# Console.debug()
# Console.error()
# Console.info()
# Console.warn()

# Console.table()

    ```
    console.table(data [, columns]);

    /*
        data
        要显示的数据。必须是数组或对象。

        columns
        一个包含列的名称的数组。
    */

    console.table(["apples", "oranges", "bananas"]);
    console.table({a:1,b:2});

    var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
    console.table(people);

    ```

# Console.assert()

    ```
    console.assert(布尔表达式, obj1 [, obj2, ..., objN]);

    console.assert(布尔表达式, msg [, subst1, ..., substN]); 

    ```

 > 如果布尔表达式为真，console.assert 不会返回任何东西
 > 如果布尔表达式为假，console.assert 会将obj1或者msg打印出来

    ```
    console.assert(1 === 0, {number: 1, errorMsg: "1就是不等于0"});

    console.assert(false, 'the word is %s', 'foo');
    ```

# console.group

    ```
    console.group("level1:")
    console.log(1000)
    console.log(2000)
    console.group("level2:")
    console.log(3000)
    console.log(4000)
    console.groupEnd()
    console.groupEnd();
    ```

# console.trace 

    输出一个堆栈跟踪。

    ```
    console.trace( [...any, ...data ]);
    ```

    参数和console.log的使用方式一样

    ```
    function foo() {
    function bar() {
        console.trace();
    }
    bar();
    }

    foo();
    ```