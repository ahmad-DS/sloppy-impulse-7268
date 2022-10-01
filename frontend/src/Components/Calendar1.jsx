import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Heading, HStack, Image,Box,Button } from '@chakra-ui/react';

function Calendar1() {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    console.log(typeof(date))
    setDate(date)
  }

  return (
    <HStack spacing={5}>
      <Box
      position="relative"
      >
      <Image
        // onClick={onOpen}
        height="50px"
        width="50px"
        _hover={{
          background: 'none',
          cursor: "pointer"
        }}
        src="https://www.mynetdiary.com/img/icon/date_range.png"
      />
      <Box>
        <Button>
          close
        </Button>
        <Calendar onChange={onChange} value={date}/>
      </Box>
      </Box>

      <Image
        w="14px"
        src="https://s3.amazonaws.com/img.mynetdiary.com/left.png"
      />
      <Heading fontSize={25} color="white">{date.toString().split(" ")[0]},{date.toString().split(" ")[1]}</Heading>
      <Image
        w="14px"
        src="https://s3.amazonaws.com/img.mynetdiary.com/right.png"
      />
    </HStack>
  );
}
export default Calendar1

{/* <div >
<Calendar onChange={onChange} value={date} />
</div> */}