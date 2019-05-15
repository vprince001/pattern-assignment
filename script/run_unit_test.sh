for TESTFILE in test/*test.js
do 
  echo $TESTFILE;
  node $TESTFILE;
done
