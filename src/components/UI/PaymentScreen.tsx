import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const PaymentScreen = () => {
  const [value, setValue] = React.useState('first');

	const PaymentOptions = [
		{
			Name: 'UPI',
		},
		{
			Name: 'Debit Card',
		},
		{
			Name: 'Cash on Delivery'
		}
	]

	const DeliveryOptions = [
		{
			Name: 'Delivery',
		},
		{
			Name: 'Takeaway',
		},
	]

  return (
	<View style={styles.container}>
		
		<View>
			<Text style={styles.ScreenTitle}>Payment Screen</Text>
		</View>

		{/* Payment Method */}
		<View>
			<Text style={styles.SubTitle}>Payment Method</Text>
		</View>
		<View style={styles.PaymentCardUI}>
			{PaymentOptions.map((data, index, PaymentOptions) => {
				
					if (PaymentOptions.indexOf(data) < PaymentOptions.length-1 )
					{
						return (
							<RadioButton.Group onValueChange={value => setValue(value)} value={value}>
								<RadioButton.Item label={data.Name} value={data.Name} />
								<View style={ styles.line}/>
							</RadioButton.Group>
						);
					}
				return (
				<RadioButton.Group onValueChange={value => setValue(value)} value={value}>
					<RadioButton.Item label={data.Name} value={data.Name} />
				</RadioButton.Group>	
				);				
			})}		
		</View>

		{/* Delivery Method */}
		<View>
			<Text style={styles.SubTitle}>Delivery Method</Text>
		</View>
		<View style={styles.PaymentCardUI}>
			{DeliveryOptions.map((data, index, DeliveryOptions) => {
					
					if (DeliveryOptions.indexOf(data) < DeliveryOptions.length-1 )
					{
						return (
							<RadioButton.Group onValueChange={value => setValue(value)} value={value}>
								<RadioButton.Item label={data.Name} value={data.Name} />``
								<View style={ styles.line}/>
							</RadioButton.Group>
						);
					}
				return (
				<RadioButton.Group onValueChange={value => setValue(value)} value={value}>
					<RadioButton.Item label={data.Name} value={data.Name} />
				</RadioButton.Group>	
				);				
			})}		
		</View>

		<View style={styles.totalPriceContainer}>
			<Text style={styles.TotalText}>Total</Text>
			<Text style={styles.TotalText_Price}>1000$</Text>
		</View>
	</View>
	
  );
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		backgroundColor: "#f2f2f2",
		alignItems: "center",
	},

	totalPriceContainer: {
		flexDirection: "row",
		marginVertical: 10,
		paddingTop: 10,
		paddingBottom: 10,
		width:"90%",
		borderRadius: 10,
		alignItems: "center"
	},

	ScreenTitle: {
		flexDirection: "row",
		marginTop:10,
		marginBottom:20,
		paddingRight: 80,
		fontFamily: "Lato-Regular",
		fontSize: 30,
		color: "#000",
		textAlign: "left"
	},

	SubTitle: {
		marginTop:10,
		paddingRight: 160,
		fontFamily: "Lato-Regular",
		fontSize: 18,
		color: "#000",
		textAlign: "left",
		alignSelf: "flex-end"
	},

	TotalText: {
		paddingRight: 180,
		marginLeft:10,
		fontFamily: "Lato-Regular",
		fontSize: 18,
		color: "#000",
		textAlign: "left"
	},

	TotalText_Price: {
		marginLeft:10,
		paddingLeft: 20,
		fontFamily: "Lato-Regular",
		fontSize: 18,
		textAlign: "left"
	},
	PaymentCardUI: {
		marginVertical: 10,
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom:20,
		width:"90%",
		backgroundColor: "#ffffff",
		borderRadius: 10,
	},
	line: {
        height: 1,
        backgroundColor: "#bababa",
		width: "90%",
		marginLeft:15,
    }
});

export default PaymentScreen;