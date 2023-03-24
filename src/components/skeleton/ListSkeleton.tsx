import React from 'react';
import { Skeleton, SkeletonText, VStack } from '@chakra-ui/react';
import { Layout } from '../Layout';

export const ListSkeleton = () => {
  return (
    <Layout>
      <VStack align='stretch'>
        <Skeleton>
          <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
        </Skeleton>
        <Skeleton>
          <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
        </Skeleton>
        <Skeleton>
          <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
        </Skeleton>
      </VStack>
    </Layout>
  );
};
