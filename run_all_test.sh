./run_test.sh ./create_rectangle.js ./test/create_rectangle_input ./test/create_rectangle_output
if [ $? != 0 ]
then
  exit
fi

./run_test.sh ./create_triangle.js ./test/create_triangle_input ./test/create_triangle_output
if [ $? != 0 ]
then
  exit
fi

./run_test.sh ./create_diamond.js ./test/create_diamond_input ./test/create_diamond_output
