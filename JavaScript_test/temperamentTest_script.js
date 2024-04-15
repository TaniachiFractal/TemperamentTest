// -4 = introvert; +4 = extravert
var inr_extr = 0;
// -3 = calm; +3 = unstable
var calm_unst = 0;

// Calc and output result
function btResult_Click()
{
    calcResult();
    outputResult();
}

// Calculate the result
function calcResult()
{

    inr_extr = 0; calm_unst = 0;

    if (document.getElementById('q1_1').checked)
        inr_extr +=Number(document.getElementById('q1_1').value);
    else if (document.getElementById('q1_2').checked)
        inr_extr += Number(document.getElementById('q1_2').value);
    inr_extr += Number(document.getElementById('q2').value);
    if (document.getElementById('q3_1').checked)
        inr_extr += Number(document.getElementById('q3_1').value);
    if (document.getElementById('q3_2').checked)
        inr_extr += Number(document.getElementById('q3_2').value);
    if (document.getElementById('q3_3').checked)
        inr_extr += Number(document.getElementById('q3_3').value);
    if (document.getElementById('q3_4').checked)
        inr_extr += Number(document.getElementById('q3_4').value);

    if (document.getElementById('qA_1').checked)
        calm_unst += Number(document.getElementById('qA_1').value);
    else if (document.getElementById('qA_2').checked)
        calm_unst += Number(document.getElementById('qA_2').value);

    if (document.getElementById('qB_1').checked)
        calm_unst += Number(document.getElementById('qB_1').value);
    else if (document.getElementById('qB_2').checked)
        calm_unst += Number(document.getElementById('qB_2').value);

    if (document.getElementById('qC_1').checked)
        calm_unst += Number(document.getElementById('qC_1').value);
    else if (document.getElementById('qC_2').checked)
        calm_unst += Number(document.getElementById('qC_2').value);
}
// Output the result to a field
function outputResult()
{
    var outputStr = inr_extr + '; ' + calm_unst + ' ';

    if (inr_extr == 0 || calm_unst == 0)
    { outputStr += 'Ваш характер плохо вписывается в систему темпераментов' }
    else
    if (inr_extr > 0) // Extravert
    {
        if (calm_unst > 0) // Unstable
        {
            outputStr += 'Холерик';
        }
        else // Calm
        {
            outputStr += 'Сангвиник';
        }
    }
    else // Introvert
    {
        if (calm_unst > 0) // Unstable
        {
            outputStr += 'Меланхолик';
        }
        else // Calm
        {
            outputStr += 'Флегматик';
        }
    }

    document.querySelector('h3').textContent = outputStr;
}