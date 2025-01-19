The solution is to use optional chaining to safely access the properties of the `data` object only if it's not null or undefined.

```javascript
// Solution: Using optional chaining
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>{data?.name || 'Loading...'}</Text> 
    </View>
  );
};

export default MyComponent;
```

Alternatively, you can use conditional rendering:

```javascript
// Solution: Conditional rendering
  return (
    <View>
      {data ? <Text>{data.name}</Text> : <Text>Loading...</Text>}
    </View>
  );
```