RSpec.describe "Buy a soda" do
    before(:each) do 
        @buyer = Buyer.new
    end
    
    context "has money" do
        before(:each) do 
            @buyer.money = 10
        end 
        it "can buy a soda" do 
            expect(@buyer.buy_soda).to eq(true)
        end
    end
    context "doesn't have money" do
        before(:each) do 
            @buyer.money = 0
        end     
        it "can't buy a soda" do
            expect(@buyer.buy_soda).to eq(false)
        end
    end
end

