import list from '../App'

export default function Listing() {
    function sliceString(sentence: any) {
        if(sentence.length > 50) {
            const newStr = sentence.slice(0, 50)
            return `${newStr}...`;
        } else {
            return sentence;
        }
    }
    function codeCurrency(currency: string) {
        if(currency === 'USD') {
            return '$';
        } else if(currency === 'EUR') {
            return '€';
        } else {
            return 'GBP';
        }
    }
    function calculateLeft(left: number) {
        if( (left < 10) || (left === 10) ) {
            return 'item-quantity level-low';
        } else if( (left < 20) || (left === 20) ) {
            return 'item-quantity level-medium';
        } else if(left > 20) {
            return 'item-quantity level-high';
        }
    }

        const {data} = props
        return (
            data.map(el => {
                return  (
                    <div className="item" key={el.listing_id}>
                        <div className="item-image">
                            <a href={el.url}>
                                <img src={el.MainImage.url_570xN} alt={el.title}/>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{this.sliceString(el.title)}</p>
                            <p className="item-price">{this.codeCurrency(el.currency_code)}{el.price}</p>
                            <p className={this.calculateLeft(el.quantity)}>{el.quantity} left</p>
                        </div>
                    </div>
                    
                )
            })
        )   
}