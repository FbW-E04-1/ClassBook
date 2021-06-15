# 2021-06-09



## Topics

## Lesson

[Video recording](https://drive.google.com/file/d/1ubPSo3C1Uydxazx3DkgJJzENSTt46dkT/view?usp=sharing)

## Grid properties

### Grid container

```

display: grid;

grid-template-columns: 100px 200px 100px;
grid-template-rows: 200px 500px;

grid-template-columns: 100px 1fr 200px;
grid-template-rows: 200px 300px;


grid-template-columns: repeat(5, 100px); /* 100px 100px 100px 100px 100px; */
grid-template-rows: 200px 300px;

grid-template-columns: repeat(5, 1fr); 
grid-template-rows: 200px 300px;

/* 1fr 100px 1fr 100px 1fr 100px 1fr 100px */
grid-template-columns: repeat(4, 1fr 100px);

grid-template-columns: minmax(200px, 1fr);




grid-template-columns: 100px minmax(200px, 1fr) 200px;




grid-template-columns: repeat(5,  minmax(200px, 1fr));

grid-template-columns: repeat(auto-fit,  minmax(200px, 1fr));
grid-template-columns: repeat(auto-fill,  minmax(200px, 1fr));

grid-auto-flow: row; /* column, dense */
grid-auto-columns: 250px;
grid-auto-rows: 300px;

gap: 1.5rem;



```

### Grid items


```

grid-column: 1 / 3;
grid-row: span 2 / 5;

grid-column-start: 1;
grid-column-end: 3;

grid-row-start: span 2;
grid-row-end: 5;

grid-column: 1 / -1;

```
