import Link from "next/link";
import Image from "next/image";
import { Flex, Avatar, Box, Text } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultHome from "../assets/images/DefaultHome.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    baths,
    rentFrequency,
    rooms,
    title,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="450px"
      p="5"
      justifyContent="flex-start"
      cursor="pointer"
      paddingTop="0"
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultHome}
          width={400}
          height={260}
          alt="house"
        ></Image>
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3">{isVerified && <GoVerified />}</Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  </Link>
);

export default Property;