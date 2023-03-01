import { Form, FormField, Page, PageContent, PageHeader } from 'grommet'
import React from 'react'

function PersonalInfo() {
    return (
        <Page>
            <PageHeader
                title="Personal Information"
                a11yTitle="Personal Information"
                size="small"
                pad="xsmall"
            />
            <PageContent>
                <Form>
                    <FormField direction="row" label="Name:" align="center">
                        Saroj EKka
                    </FormField>
                    <FormField direction="row" label="Age:" align="center">
                        49 years
                    </FormField>
                    <FormField direction="row" label="Language:" align="center">
                        English, Hindi
                    </FormField>
                </Form>
            </PageContent>
        </Page>
    )
}

export default PersonalInfo
