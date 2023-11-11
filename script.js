document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generalCoupon').addEventListener('change', function() {
      document.getElementById('generalCouponText').style.display = 'block';
      document.getElementById('uniqueCouponText').style.display = 'none';
    });
  
    document.getElementById('uniqueCoupon').addEventListener('change', function() {
      document.getElementById('generalCouponText').style.display = 'none';
      document.getElementById('uniqueCouponText').style.display = 'block';
    });
  
    document.getElementById('generalCouponText').style.display = 'none';
    document.getElementById('uniqueCouponText').style.display = 'none';
  });
  
  document.querySelectorAll('.filter-button').forEach(function(button) {
    button.addEventListener('click', function() {
      document.querySelector('.filter-button.active').classList.remove('active');
      button.classList.add('active');
    });
      
  });

document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('couponChart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['UNICO', 'GERAL'],
        datasets: [{
          data: [10, 20],
          backgroundColor: ['#007BFF', '#2DD454']
        }]
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
        }
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var enableCouponsSwitch = document.getElementById('enableCoupons');
    var mainElement = document.getElementsByTagName('main')[0];
    var footerElement = document.getElementsByTagName('footer')[0];
  
    enableCouponsSwitch.addEventListener('change', function() {
      if (enableCouponsSwitch.checked) {
        mainElement.style.display = 'block';
        footerElement.style.display = 'block';
      } else {
        mainElement.style.display = 'none';
        footerElement.style.display = 'none';
      }
    });
  });
  
  

