document.getElementById('ckd-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;
    const bp = document.getElementById('bp').value;
    const diabetes = document.getElementById('diabetes').value;
    const symptoms = document.getElementById('symptoms').value;

    let riskScore = 0;

    if (age > 60) {
        riskScore += 2; // Older age increases risk
    } else if (age > 45) {
        riskScore += 1;
    }

    if (bp === 'yes') {
        riskScore += 2; // High blood pressure increases risk
    }

    if (diabetes === 'yes') {
        riskScore += 2; // Diabetes increases risk
    }

    if (symptoms === 'yes') {
        riskScore += 2; // Symptoms like fatigue/swelling increase risk
    }

    let riskMessage = '';
    let adviceMessage = '';

    if (riskScore >= 5) {
        riskMessage = 'High Risk of CKD';
        adviceMessage = 'Immediate consultation required for further tests such as eGFR and kidney ultrasound.';
    } else if (riskScore >= 3) {
        riskMessage = 'Moderate Risk of CKD';
        adviceMessage = 'Consider regular monitoring of kidney function and lifestyle adjustments.';
    } else {
        riskMessage = 'Low Risk of CKD';
        adviceMessage = 'Maintain a healthy lifestyle and monitor kidney health periodically.';
    }

    document.getElementById('risk-message').textContent = riskMessage;
    document.getElementById('advice').textContent = adviceMessage;

    document.getElementById('result').classList.remove('hidden');
});