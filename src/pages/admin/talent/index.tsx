import CategoryTab from '@/components/atoms/CategoryTab';
import Layout from '@/components/moleculs/admin/Layout'
import CoolTable from '@/components/moleculs/admin/Table';
import React from 'react'

type Props = {}

const Talent = (props: Props) => {

    return (
        <Layout title='Talent'>
            <CategoryTab />
        </Layout>
    )
}

export default Talent