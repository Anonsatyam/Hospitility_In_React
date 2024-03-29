import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import {BsFilter} from 'react-icons/bs';
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import NoResults from "../assets/images/NoResults.png"
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Search = ({properties}) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();
    return(
        <Box>
            <Flex 
            cursor="pointer" 
            bg="gray.100"
            borderBottom="1px"
            borderColor="gray.200"
            p="2"
            fontWeight="black"
            fontSize="lg"
            justifyContent="center"
            alignItems="center"
            onClick={() => setSearchFilters(!searchFilters)}>
                <Text>Search</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter}/>
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {properties.map((property) => <Property property={property} key={property.id}/>)}
            </Flex>
            {properties.length === 0 && (
                <Flex alignItems="center" justifyContent="center" flexDirection="column" marginBottom="5" marginTop="5">
                    <Image alt="No Results" src={NoResults} />
                </Flex>
            )}
        </Box>
    )
}

export default Search;

export async function getServerSideProps({query}) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalIDs = query.categoryExternalIDs || '4';


    const data = await fetchApi(
      `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalIDs=${categoryExternalIDs}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
    );
  
    return {
      props: {
        properties: data?.hits
      }
    };
  }