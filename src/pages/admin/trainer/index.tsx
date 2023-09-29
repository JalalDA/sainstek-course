import CategoryTab from '@/components/atoms/CategoryTab';
import Layout from '@/components/moleculs/admin/Layout'
import CoolTable from '@/components/moleculs/admin/Table';
import React from 'react'

type Props = {}

const Trainer = (props: Props) => {

    return (
        <Layout title='Trainer'>
            <CategoryTab/>
        </Layout>
    )
}

export default Trainer