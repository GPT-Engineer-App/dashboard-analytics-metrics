import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Business Dashboard
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        <StatBox icon={FaDollarSign} title="Revenue" amount="$30K" percentageChange={5.4} />
        <StatBox icon={FaShoppingCart} title="Sales" amount="1,400" percentageChange={-2.1} />
        <StatBox icon={FaUsers} title="New Customers" amount="80" percentageChange={3.8} />
        <StatBox icon={FaChartLine} title="Growth" amount="7%" percentageChange={4.7} />
      </SimpleGrid>
    </Box>
  );
};

const StatBox = ({ icon: Icon, title, amount, percentageChange }) => {
  return (
    <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
      <Flex alignItems="center">
        <Box fontSize="3xl" as={Icon} mr={2} />
        <StatLabel fontWeight="medium">{title}</StatLabel>
      </Flex>
      <StatNumber fontSize="2xl">{amount}</StatNumber>
      <StatHelpText>
        <StatArrow type={percentageChange > 0 ? "increase" : "decrease"} />
        {Math.abs(percentageChange)}%
      </StatHelpText>
    </Stat>
  );
};

export default Index;
