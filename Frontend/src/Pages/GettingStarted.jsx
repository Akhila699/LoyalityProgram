import React, { useState } from 'react'
import { Switch } from '@chakra-ui/react'
const GettingStarted = () => {
    const [isForBuyers, setIsForBuyers] = useState(true);

    const handleSwitchChange = () => {
        setIsForBuyers(!isForBuyers);
    };
    return (
        <div>
            <Switch
                colorScheme="teal" // You can choose a color scheme of your choice
                size="lg" // You can adjust the size as needed
                isChecked={isForBuyers}
                onChange={handleSwitchChange}
            >
                {isForBuyers ? 'For Buyers' : 'For Sellers'}
            </Switch>
        </div>
    )
}

export default GettingStarted;