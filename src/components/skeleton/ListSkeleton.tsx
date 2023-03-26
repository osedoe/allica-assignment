import React from 'react';
import { Skeleton, SkeletonText, VStack } from '@chakra-ui/react';
import { Layout } from '../layout/Layout';

export const ListSkeleton = () => {
  return (
    <Layout>
      <VStack align='stretch'>
        <Skeleton>
          <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='7' />
        </Skeleton>
        <Skeleton>
          <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='7' />
        </Skeleton>
        <Skeleton>
          <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='7' />
        </Skeleton>
      </VStack>
    </Layout>
  );
};
