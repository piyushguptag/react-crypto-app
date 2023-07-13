import { HStack , Button} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchExhanges } from '../redux/slice/excCall';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
        <Button variant={"unstyled"} color={"white"}>
            <Link to={"/"}>Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} onClick={e => dispatch(fetchExhanges())}>
            <Link to={"/exchanges"}>Exchange</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
            <Link to={"/coins"}>Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header