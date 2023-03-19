# JS 在Chrome V8中Array.sort(callback)的排序算法

## 排序算法是TimSort

 - 源码地址

    https://github.com/v8/v8/blob/main/third_party/v8/builtins/array-sort.tq

 - TimSort

    维基百科:Timsort 是一种混合稳定的排序算法，源自合并排序(Merge Sort)和插入排序(Insertion Sort)
    V8:合并排序(Merge Sort)和插入排序(Binary Insertion Sort)
  
 - 案例分析

    ![image](https://github.com/hellowoody/bilibili-video-code/blob/main/array-sort/img.png?raw=true)


 > Chrome V8老版本的排序算法是插入排序 和 快速排序  
 > 源码地址: https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js